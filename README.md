<br>

## Features

A nearly complete implementation of the Bitwarden Client API is provided, including:

 * [Personal Vault]
 * [Send]
 * [Attachments]
 * [Website icons]
 * [Personal API Key]
 * [Organizations]
   - [Collections],
     [Password Sharing]
     [Member Roles]
     [Groups]
     [Event Logs]
     [Admin Password Reset]
     [Directory Connector]
     [Policies]
 * [Multi/Two Factor Authentication]
   - [Authenticator]
     [Email]
     [FIDO2 WebAuthn]
     [YubiKey]
     [Duo]
 * [Emergency Access]
 * [Vaultwarden Admin Backend]
 * [Modified Web Vault client]

<br>

## Usage

> [!IMPORTANT]
> Most modern web browsers disallow the use of Web Crypto APIs in insecure contexts. In this case, you might get an error like `Cannot read property 'importKey'`. To solve this problem, you need to access the web vault via HTTPS or localhost.
>
>If you have an available domain name, you can get HTTPS certificates with [Let's Encrypt](https://letsencrypt.org/), or you can generate self-signed certificates with utilities like [mkcert](https://github.com/FiloSottile/mkcert). Some proxies automatically do this step, like Caddy or Traefik (see examples linked above).

The main way to use Vaultwarden is via our container images which are published to [ghcr.io](https://github.com/dani-garcia/vaultwarden/pkgs/container/vaultwarden), [docker.io](https://hub.docker.com/r/vaultwarden/server) and [quay.io](https://quay.io/repository/vaultwarden/server).

There are also [community driven packages](https://github.com/dani-garcia/vaultwarden/wiki/Third-party-packages) which can be used, but those might be lagging behind the latest version or might deviate in the way Vaultwarden is configured, as described in our [Wiki](https://github.com/dani-garcia/vaultwarden/wiki).

### Docker/Podman CLI

Pull the container image and mount a volume from the host for persistent storage.<br>
You can replace `docker` with `podman` if you prefer to use podman.

```shell
docker pull vaultwarden/server:latest
docker run --detach --name vaultwarden \
  --env DOMAIN="https://vw.domain.tld" \
  --volume /vw-data/:/data/ \
  --restart unless-stopped \
  --publish 80:80 \
  vaultwarden/server:latest
```

This will preserve any persistent data under `/vw-data/`, you can adapt the path to whatever suits you.

### Docker Compose

To use Docker compose you need to create a `compose.yaml` which will hold the configuration to run the Vaultwarden container.

```yaml
services:
  vaultwarden:
    image: vaultwarden/server:latest
    container_name: vaultwarden
    restart: unless-stopped
    environment:
      DOMAIN: "https://vw.domain.tld"
    volumes:
      - ./vw-data/:/data/
    ports:
      - 80:80
```

<br>