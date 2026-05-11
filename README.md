# Luxe Quality Test Task

Small UI automation project built with `WebdriverIO` and `TypeScript`.

## Stack

- `WebdriverIO`
- `TypeScript`
- `Mocha`
- `Allure Reporter`

## Install

```bash
npm install
```

## Run Tests

Default run:

```bash
npm test
```

Run TEST config explicitly:

```bash
npm run test:test
```

Run PROD config explicitly:

```bash
npm run test:prod
```

## Environment

Project uses env variables for base URL and test credentials:

```env
E2E_BASE_URL=https://www.saucedemo.com
VALID_USER_USERNAME=standard_user
VALID_USER_PASSWORD=secret_sauce
INVALID_USER_USERNAME=standard_user
INVALID_USER_PASSWORD=12345
LOCKED_USER_USERNAME=locked_out_user
LOCKED_USER_PASSWORD=secret_sauce
```

Create `.env.test` or `.env.prod` in the project root based on `.env.example`.

Example:

```bash
cp .env.example .env.test
```
