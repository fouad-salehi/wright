#!/usr/bin/env node

const { brand, blank, error } = require('./core/logger');
const {
    askProjectName,
    askPreset,
    askTailwindVersion,
    askBootstrapVersion,
} = require('./core/prompt');
const { buildProject } = require('./core/filesystem');

const presets = {
    vanilla: require('./presets/vanilla'),
    tailwind: require('./presets/tailwind'),
    bootstrap: require('./presets/bootstrap'),
};

const main = async () => {
    brand();

    const projectName = await askProjectName();

    if (!projectName) {
        return;
    }

    const presetKeys = Object.keys(presets);
    const presetName = await askPreset(presetKeys);

    if (!presetName) {
        return;
    }

    const answers = {};

    if (presetName === 'tailwind') {
        const version = await askTailwindVersion();

        if (!version) {
            return;
        }

        answers.tailwindVersion = version;
    }

    if (presetName === 'bootstrap') {
        const version = await askBootstrapVersion();

        if (!version) {
            return;
        }

        answers.bootstrapVersion = version;
    }

    const preset = presets[presetName];

    await buildProject(projectName, preset, answers);
};

main().catch((err) => {
    blank();
    error(err.message);
    blank();
    process.exit(1);
});