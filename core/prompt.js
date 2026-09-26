const readline = require('readline');
const { CYAN, RESET, error, blank } = require('./logger');

const createInterface = () => {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
};

const ask = (rl, question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

const askProjectName = async () => {
    const rl = createInterface();
    const answer = await ask(rl, `  ${CYAN}›${RESET} Project name: `);
    rl.close();

    const trimmed = answer.trim();

    if (!trimmed) {
        blank();
        error('Project name cannot be empty.');
        blank();
        return null;
    }

    if (trimmed.includes('/') || trimmed.includes('\\')) {
        blank();
        error('Project name cannot contain "/" or "\\".');
        blank();
        return null;
    }

    return trimmed;
};

const askPreset = async (presets) => {
    const rl = createInterface();
    const list = presets.join(' / ');
    const answer = await ask(rl, `  ${CYAN}›${RESET} Preset? (${list}): `);
    rl.close();

    const trimmed = answer.trim().toLowerCase();

    if (!presets.includes(trimmed)) {
        blank();
        error(`Please choose one of: ${list}.`);
        blank();
        return null;
    }

    return trimmed;
};

const askTailwindVersion = async () => {
    const rl = createInterface();
    const answer = await ask(rl, `  ${CYAN}›${RESET} Tailwind version? (v3 / v4): `);
    rl.close();

    const trimmed = answer.trim().toLowerCase();

    if (trimmed !== 'v3' && trimmed !== 'v4') {
        blank();
        error('Please choose either "v3" or "v4".');
        blank();
        return null;
    }

    return trimmed;
};

const askBootstrapVersion = async () => {
    const rl = createInterface();
    const answer = await ask(rl, `  ${CYAN}›${RESET} Bootstrap version? (v4 / v5): `);
    rl.close();

    const trimmed = answer.trim().toLowerCase();

    if (trimmed !== 'v4' && trimmed !== 'v5') {
        blank();
        error('Please choose either "v4" or "v5".');
        blank();
        return null;
    }

    return trimmed;
};

module.exports = {
    askProjectName,
    askPreset,
    askTailwindVersion,
    askBootstrapVersion,
};