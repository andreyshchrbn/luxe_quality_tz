const { spawnSync } = require('node:child_process');
const path = require('node:path');

const cliArgs = process.argv.slice(2);
const forwardedArgs = [];

for (let index = 0; index < cliArgs.length; index += 1) {
    const arg = cliArgs[index];

    if (arg.startsWith('--env=')) {
        process.env.TEST_ENV = arg.split('=')[1];
        continue;
    }

    if (arg === '--env') {
        process.env.TEST_ENV = cliArgs[index + 1];
        index += 1;
        continue;
    }

    forwardedArgs.push(arg);
}

const wdioCliPath = path.resolve(
    path.dirname(require.resolve('@wdio/cli')),
    '../bin/wdio.js',
);

const result = spawnSync(
    process.execPath,
    [wdioCliPath, 'run', './wdio.conf.ts', ...forwardedArgs],
    {
        cwd: process.cwd(),
        env: process.env,
        stdio: 'inherit',
    },
);

process.exit(result.status ?? 1);
