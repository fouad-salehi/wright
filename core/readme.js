const buildReadme = (data) => {
    const {
        projectName,
        presetLabel,
        features,
        structure,
        extraSections,
    } = data;

    const featuresList = features.map((feature) => `* ${feature}`).join('\n');
    const extra = extraSections ? `\n${extraSections}\n` : '';

    return `# ${projectName}

**Powered by ${presetLabel}**

This project was created using WRIGHT, a simple and practical project structure generator designed for web developers and designers.

It provides a clean and organized foundation for web projects, helping developers spend less time creating folders and files manually and more time focusing on development.

## Features

${featuresList}

## Project Structure

${structure}

## Getting Started

This project provides the initial structure required for a web project.

You can start developing directly inside the generated project directory and modify the structure according to your needs.

### CSS

Place stylesheets and CSS-related resources inside:

dashboard/assets/css/

### JavaScript

Place JavaScript files and related resources inside:

dashboard/assets/js/

### Images

Place project images, icons, and other visual assets inside:

dashboard/assets/images/

### Fonts

Place custom fonts and font-related resources inside:

dashboard/assets/fonts/
${extra}
## Libraries & Frameworks

If your project uses a library or framework, you can create an additional folder inside the appropriate technology directory.

For example:

dashboard/assets/js/
├── libraries/
└── app.js

or:

dashboard/assets/css/
├── libraries/
└── stylesheet.css

This keeps third-party resources separated from your own project files and helps maintain a clean structure.

## Philosophy

WRIGHT is built around a simple idea:

**Create the structure once. Focus on building.**

A well-organized project structure makes development easier, improves maintainability, and helps prevent unnecessary confusion as a project grows.

## Compatibility

WRIGHT can be used as a starting point for projects involving technologies such as:

* HTML
* CSS
* JavaScript
* PHP
* Front-end libraries
* CSS frameworks
* JavaScript frameworks
* Other web development tools

## Notes

WRIGHT generates a starting structure rather than a complete application.

You are free to modify, remove, rename, or extend any generated file or directory according to your project's requirements.

For larger projects, additional directories can be added as the project grows.

## License

This project is open source.

For more information and the latest version of WRIGHT, visit:

https://github.com/fouad-salehi`;
};

module.exports = {
    buildReadme,
};