# Env Problems

Imagine you are using a service to auto generated random passwords.

You opt for a services that produces all the special characters like `$` and save them in a `.env` file.

You will see why this is problematic with node vs docker.

## Requirements

- docker
- docker compose
- node

## How to Run

```bash
# for node
npm install
node index.js


# for docker
docker compose up --build
```
