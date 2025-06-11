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