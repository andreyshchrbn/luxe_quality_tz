import fs from 'node:fs';
import path from 'node:path';
import dotenv from 'dotenv';

const supportedEnvironments = ['test', 'prod'] as const;

type TestEnvironment = (typeof supportedEnvironments)[number];
type UserCredentials = {
    username: string;
    password: string;
};

const projectRoot = path.resolve(__dirname, '../..');

const loadEnvironmentFiles = (fileNames: string[]): void => {
    for (const fileName of fileNames) {
        const filePath = path.join(projectRoot, fileName);

        if (fs.existsSync(filePath)) {
            dotenv.config({ path: filePath, override: true, quiet: true });
        }
    }
};

loadEnvironmentFiles(['.env', '.env.local']);

const parseEnvironment = (): TestEnvironment => {
    const requestedEnvironment = process.env.TEST_ENV ?? 'test';

    if (supportedEnvironments.includes(requestedEnvironment as TestEnvironment)) {
        return requestedEnvironment as TestEnvironment;
    }

    throw new Error(
        `Unsupported TEST_ENV "${requestedEnvironment}". Supported values: ${supportedEnvironments.join(', ')}.`
    );
};

const testEnvironment = parseEnvironment();

const getRequiredString = (name: string): string => {
    const value = process.env[name]?.trim();

    if (!value) {
        throw new Error(`Missing required environment variable "${name}".`);
    }

    return value;
};

const getUserCredentials = (prefix: string): UserCredentials => ({
    username: getRequiredString(`${prefix}_USERNAME`),
    password: getRequiredString(`${prefix}_PASSWORD`),
});

loadEnvironmentFiles([`.env.${testEnvironment}`, `.env.${testEnvironment}.local`]);

export const testRuntimeConfig = {
    environment: testEnvironment,
    baseUrl: getRequiredString('E2E_BASE_URL'),
    users: {
        validUser: getUserCredentials('VALID_USER'),
        invalidUser: getUserCredentials('INVALID_USER'),
        lockedUser: getUserCredentials('LOCKED_USER'),
    },
} as const;
