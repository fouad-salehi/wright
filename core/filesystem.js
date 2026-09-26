const fs = require('fs');
const path = require('path');
const { success, warning, error, info, blank, GREEN, BOLD, RESET, DIM } = require('./logger');
const { download } = require('./downloader');
const { buildReadme } = require('./readme');

const FAVICON_URL = 'https://hellstate.web.app/favicon.ico';

const buildProject = async (projectName, preset, answers) => {
    const WRIGHT = path.join(__dirname, '..', '..', projectName);

    if (fs.existsSync(WRIGHT)) {
        warning(`A ${projectName} directory already exists.`);
        info('Please remove or rename the existing directory and try again.');
        blank();
        return false;
    }

    blank();

    fs.mkdirSync(WRIGHT);
    success(`${projectName} directory created.`);

    const folders = preset.folders || [];

    folders.forEach((folder) => {
        const fullPath = path.join(WRIGHT, folder);

        if (!fs.existsSync(fullPath)) {
            fs.mkdirSync(fullPath, { recursive: true });
            success(`${folder} directory created.`);
        }
    });

    const files = preset.files({ projectName, ...answers });

    Object.entries(files).forEach(([relativePath, content]) => {
        const fullPath = path.join(WRIGHT, relativePath);

        fs.mkdirSync(path.dirname(fullPath), { recursive: true });
        fs.writeFileSync(fullPath, content);
        success(`${relativePath} created.`);
    });

    const faviconPath = path.join(WRIGHT, 'favicon.ico');

    try {
        await download(FAVICON_URL, faviconPath);
        success('Favicon downloaded.');
    } catch (err) {
        warning(`Favicon could not be downloaded: ${err.message}`);
        info('The project was created successfully without the favicon.');
    }

    const readmeContent = buildReadme({
        projectName,
        presetLabel: preset.label,
        features: preset.features(answers),
        structure: preset.structure(projectName),
        extraSections: preset.extraSections ? preset.extraSections(answers) : null,
    });

    fs.writeFileSync(path.join(WRIGHT, 'README.txt'), readmeContent);
    success('README.txt created.');

    blank();
    console.log(`  ${GREEN}${BOLD}${projectName} project created successfully!${RESET}`);
    blank();
    console.log(`  ${DIM}Location:${RESET} ${path.relative(process.cwd(), WRIGHT)}`);
    blank();

    return true;
};

module.exports = {
    buildProject,
};