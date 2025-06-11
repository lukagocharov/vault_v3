# syntax=docker/dockerfile:1
# check=skip=FromPlatformFlagConstDisallowed,RedundantTargetPlatform

# This file was generated using a Jinja2 template.
# Please make your changes in `DockerSettings.yaml` or `Dockerfile.j2` and then `make`

####################### VAULT BUILD IMAGE #######################
FROM scratch AS web_assets
COPY ./web-vault /web-vault

########################## Cross Compile Docker Helper Scripts ##########################
FROM --platform=linux/amd64 docker.io/tonistiigi/xx@sha256:9c207bead753dda9430bdd15425c6518fc7a03d866103c516a2c6889188f5894 AS xx

########################## BUILD IMAGE ##########################
FROM --platform=$BUILDPLATFORM docker.io/library/rust:1.86.0-slim-bookworm AS build
COPY --from=xx / /
ARG TARGETARCH
ARG TARGETVARIANT
ARG TARGETPLATFORM

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

ENV DEBIAN_FRONTEND=noninteractive \
    LANG=C.UTF-8 \
    TZ=UTC \
    TERM=xterm-256color \
    CARGO_HOME="/root/.cargo" \
    USER="root"

RUN apt-get update && \
    apt-get install -y \
        --no-install-recommends \
        clang \
        pkg-config \
        git \
        "libc6-$(xx-info debian-arch)-cross" \
        "libc6-dev-$(xx-info debian-arch)-cross" \
        "linux-libc-dev-$(xx-info debian-arch)-cross" && \
    xx-apt-get install -y \
        --no-install-recommends \
        gcc \
        libmariadb3 \
        libpq-dev \
        libpq5 \
        libssl-dev \
        zlib1g-dev && \
    apt-get download "libmariadb-dev-compat:$(xx-info debian-arch)" "libmariadb-dev:$(xx-info debian-arch)" && \
    dpkg --force-all -i ./libmariadb-dev*.deb && \
    echo "export CARGO_TARGET=$(xx-cargo --print-target-triple)" >> /env-cargo

RUN mkdir -pv "${CARGO_HOME}" && \
    rustup set profile minimal

RUN USER=root cargo new --bin /app
WORKDIR /app

ARG TARGET_PKG_CONFIG_PATH

RUN source /env-cargo && \
    if xx-info is-cross ; then \
        echo "export CC_$(echo "${CARGO_TARGET}" | tr '[:upper:]' '[:lower:]' | tr - _)=/usr/bin/$(xx-info)-gcc" >> /env-cargo && \
        echo "export CARGO_TARGET_$(echo "${CARGO_TARGET}" | tr '[:lower:]' '[:upper:]' | tr - _)_LINKER=/usr/bin/$(xx-info)-gcc" >> /env-cargo && \
        echo "export CROSS_COMPILE=1" >> /env-cargo && \
        echo "export PKG_CONFIG_ALLOW_CROSS=1" >> /env-cargo && \
        if [[ -n "${TARGET_PKG_CONFIG_PATH}" ]]; then \
            echo "export TARGET_PKG_CONFIG_PATH=${TARGET_PKG_CONFIG_PATH}" >> /env-cargo ; \
        else \
            echo "export PKG_CONFIG_PATH=/usr/lib/$(xx-info)/pkgconfig" >> /env-cargo ; \
        fi && \
        echo "# End of env-cargo" >> /env-cargo ; \
    fi && \
    cat /env-cargo

RUN source /env-cargo && \
    rustup target add "${CARGO_TARGET}"

COPY ./Cargo.* ./rust-toolchain.toml ./build.rs ./
COPY ./macros ./macros

ARG CARGO_PROFILE=release
ARG DB=sqlite,mysql,postgresql

RUN source /env-cargo && \
    cargo build --features ${DB} --profile "${CARGO_PROFILE}" --target="${CARGO_TARGET}" && \
    find . -not -path "./target*" -delete

COPY . .

ARG VW_VERSION

RUN source /env-cargo && \
    touch build.rs src/main.rs && \
    cargo build --features ${DB} --profile "${CARGO_PROFILE}" --target="${CARGO_TARGET}" && \
    if [[ "${CARGO_PROFILE}" == "dev" ]] ; then \
        ln -vfsr "/app/target/${CARGO_TARGET}/debug" /app/target/final ; \
    else \
        ln -vfsr "/app/target/${CARGO_TARGET}/${CARGO_PROFILE}" /app/target/final ; \
    fi

######################## RUNTIME IMAGE ########################
FROM --platform=$TARGETPLATFORM docker.io/library/debian:bookworm-slim

ENV ROCKET_PROFILE="release" \
    ROCKET_ADDRESS=0.0.0.0 \
    ROCKET_PORT=80 \
    DEBIAN_FRONTEND=noninteractive

RUN mkdir /data && \
    apt-get update && apt-get install -y \
        --no-install-recommends \
        ca-certificates \
        curl \
        libmariadb-dev-compat \
        libpq5 \
        openssl && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

VOLUME /data
EXPOSE 80

WORKDIR /

COPY docker/healthcheck.sh docker/start.sh /
COPY --from=web_assets /web-vault ./web-vault
COPY --from=build /app/target/final/vault_v3 .

HEALTHCHECK --interval=60s --timeout=10s CMD ["/healthcheck.sh"]

CMD ["/start.sh"]