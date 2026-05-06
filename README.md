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

Project uses only one env variable:

```env
E2E_BASE_URL=https://www.saucedemo.com
```

Create `.env.test` or `.env.prod` in the project root based on `.env.example`.

Example:

```bash
cp .env.example .env.test
```
