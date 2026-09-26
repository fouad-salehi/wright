# WRIGHT

![WRIGHT](https://img.shields.io/badge/version-2.0.0-important)
![Platform](https://img.shields.io/badge/platform-Node.js-green)
![Language](https://img.shields.io/badge/language-JavaScript-yellow)
![Purpose](https://img.shields.io/badge/purpose-folder%20generator-blue)
![Presets](https://img.shields.io/badge/presets-vanilla%20%7C%20tailwind%20%7C%20bootstrap-blue)
![Run](https://img.shields.io/badge/run-node%20wright.js-important)

**WRIGHT — A folder structure generator for web developers.**

## Description

WRIGHT is a simple and practical project structure generator designed for web developers and designers working with HTML, CSS, JavaScript, PHP, and related libraries and frameworks.

It automatically creates a clean and organized project structure, helping developers save time during project setup and avoid manually creating and naming folders and files.

WRIGHT now ships with multiple presets, so the same tool can scaffold a plain project, a Tailwind CSS project, or a Bootstrap project — depending on what you choose at setup time.

The generated structure includes:

* An `index.html` file for front-end development
* A `dashboard/assets` directory
* Separate folders for CSS, JavaScript, images, and fonts
* A default `stylesheet.css`
* An empty `app.js`
* A `favicon.ico`
* A project `README.txt`

## Getting Started

Make sure [Node.js](https://nodejs.org/) is installed on your system.

Then run:

```bash
node wright.js
```

WRIGHT will ask you for a project name, then ask which preset you want to use. Depending on the preset, it may ask for a version.

For example:

```text
› Project name: my-website
› Preset? (vanilla / tailwind / bootstrap): tailwind
› Tailwind version? (v3 / v4): v4
```

or:

```text
› Project name: my-website
› Preset? (vanilla / tailwind / bootstrap): bootstrap
› Bootstrap version? (v4 / v5): v5
```

or, for a plain project:

```text
› Project name: my-website
› Preset? (vanilla / tailwind / bootstrap): vanilla
```

The generated project will have a structure similar to:

```text
my-website/
├── dashboard/
│   └── assets/
│       ├── css/
│       │   └── stylesheet.css
│       ├── js/
│       │   └── app.js
│       ├── images/
│       └── fonts/
├── index.html
├── favicon.ico
└── README.txt
```

## Presets

WRIGHT ships with three built-in presets:

| Preset    | Description                           | Versions |
| --------- | ------------------------------------- | -------- |
| vanilla   | Plain HTML / CSS / JavaScript project | —        |
| tailwind  | Tailwind CSS project via CDN          | v3 / v4  |
| bootstrap | Bootstrap project via CDN             | v4 / v5  |

Each preset generates the same base structure, but adapts `index.html` and `stylesheet.css` to the selected framework and version.

## Project Architecture

WRIGHT is organized into a shared core and independent presets:

```text
wright/
├── core/
│   ├── logger.js
│   ├── prompt.js
│   ├── downloader.js
│   ├── readme.js
│   └── filesystem.js
├── presets/
│   ├── vanilla.js
│   ├── tailwind.js
│   └── bootstrap.js
├── wright.js
├── package.json
├── README.md
└── LICENSE
```

The `core/` directory contains everything shared between presets, and each preset in `presets/` only defines what is specific to its framework.

This makes it easy to add new presets (for example, Vue, React, Svelte, or Astro) without duplicating logic.

## Philosophy

Create the structure once. Focus on building.

WRIGHT is designed to make the initial setup of a web project simple, fast, and organized.

## Author

Fouad Salehi

GitHub: https://github.com/fouad-salehi

## License

This project is proprietary software.

You may view and run the project for personal or evaluation purposes, subject to the terms of the LICENSE file.

Copying, modifying, creating derivative works, incorporating the project into another project, or redistributing modified versions is not permitted.

Redistribution of the original project is permitted only with clear and visible attribution to:

Fouad Salehi / WRIGHT — Web Project Folder Structure

Any use beyond the permissions granted by the LICENSE requires prior written permission from the copyright owner.
