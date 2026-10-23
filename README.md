# WRIGHT

![Version](https://img.shields.io/badge/version-2.0.2-important)
![Platform](https://img.shields.io/badge/platform-Node.js-green)
![Language](https://img.shields.io/badge/language-JavaScript-yellow)
![Purpose](https://img.shields.io/badge/purpose-folder%20generator-blue)
![Presets](https://img.shields.io/badge/presets-vanilla%20%7C%20tailwind%20%7C%20bootstrap-blue)
![Registry](https://img.shields.io/badge/registry-npm-CB3837?logo=npm)
![CLI](https://img.shields.io/badge/CLI-wright-blue)
![License](https://img.shields.io/badge/license-Proprietary-red)

<img width="1456" height="720" alt="WRIGHT — web project structure generator" src="https://github.com/user-attachments/assets/d79b023c-0ff0-4481-98a1-9636b99d51f4" />

## Description

WRIGHT is a simple and practical project structure generator designed for web developers and designers working with HTML, CSS, JavaScript, PHP, and related libraries and frameworks.

It automatically creates a clean and organized project structure, helping developers save time during project setup and avoid manually creating and naming folders and files.

WRIGHT now ships with multiple presets, so the same tool can scaffold a plain project, a Tailwind CSS project, or a Bootstrap project — depending on what you choose at setup time.

The generated structure includes:

- An `index.html` file for front-end development
- A `dashboard/assets` directory
- Separate folders for CSS, JavaScript, images, and fonts
- A default `stylesheet.css`
- An empty `app.js`
- A `favicon.ico`
- A project `README.txt`

## Requirements

- [Node.js](https://nodejs.org/) v18 or higher
- No external dependencies — WRIGHT runs with plain Node.js

## Getting Started

### Install from npm (Recommended)

WRIGHT is published on the public npm registry. This is the simplest and fastest way to install it.

**Global installation:**

```bash
npm install -g wright-tools
```

This installs the `wright` command globally, so you can run it from any directory.

**Verify the installation:**

```bash
wright
```

If the CLI starts and shows the project name prompt, the installation was successful.

**Update to the latest version:**

```bash
npm update -g wright-tools
```

**Uninstall:**

```bash
npm uninstall -g wright-tools
```

> [!NOTE]
> The package name on npm is `wright-tools`, while the executable command is `wright`.
> This is intentional: the command is short and easy to type, while the package name
> follows npm naming conventions.

<details>
<summary>Install from GitHub Packages (requires authentication)</summary>

### Install from GitHub Packages

WRIGHT is also available through GitHub Packages. This method requires npm authentication
and is mainly useful if you want to pull directly from the GitHub registry.

Create a [GitHub Personal Access Token (classic)](https://github.com/settings/tokens)
with the `read:packages` scope.

Add the following to your user-level `.npmrc` file:

```ini
@fouad-salehi:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

Set the `GITHUB_TOKEN` environment variable to your token.

**Windows Command Prompt:**

```cmd
set GITHUB_TOKEN=YOUR_GITHUB_TOKEN
```

**PowerShell:**

```powershell
$env:GITHUB_TOKEN = "YOUR_GITHUB_TOKEN"
```

**Linux/macOS:**

```bash
export GITHUB_TOKEN=YOUR_GITHUB_TOKEN
```

Replace `YOUR_GITHUB_TOKEN` with your actual token. Run the installation command in the
same terminal session where the variable is set.

Keep your token private and never commit it to your repository.

Install WRIGHT globally:

```bash
npm install -g @fouad-salehi/wright
```

</details>

### Run from Source (Clone)

If you want to inspect the source code, contribute, or run the latest development version:

```bash
git clone https://github.com/fouad-salehi/wright.git
cd wright
node wright.js
```

This runs WRIGHT directly from the cloned folder without a global installation.

## CLI Usage

WRIGHT is fully interactive. After launching it, it walks you through a short set of prompts
and then generates the entire project structure for you.

### Launching the CLI

Depending on how you installed WRIGHT, launch it with one of these commands:

| Installation method | Launch command |
| :--- | :--- |
| npm (global) | `wright` |
| GitHub Packages (global) | `wright` |
| Run from source | `node wright.js` |

The behavior is identical in all three cases.

### The Interactive Prompts

WRIGHT asks questions in sequence. The number of questions depends on the preset you choose.

**Step 1 — Project name**

```text
› Project name: my-website
```

Enter the name of the folder that will be created. WRIGHT creates this folder in the current
working directory.

**Step 2 — Preset selection**

```text
› Preset? (vanilla / tailwind / bootstrap): vanilla
```

Choose one of the three built-in presets:

- `vanilla` — plain HTML / CSS / JavaScript
- `tailwind` — Tailwind CSS via CDN
- `bootstrap` — Bootstrap via CDN

**Step 3 — Version selection (only for tailwind and bootstrap)**

If you chose `tailwind`:

```text
› Tailwind version? (v3 / v4): v4
```

If you chose `bootstrap`:

```text
› Bootstrap version? (v4 / v5): v5
```

The `vanilla` preset skips this step because it has no external framework version.

### Example Sessions

**Vanilla project:**

```text
› Project name: my-website
› Preset? (vanilla / tailwind / bootstrap): vanilla
```

**Tailwind project:**

```text
› Project name: my-website
› Preset? (vanilla / tailwind / bootstrap): tailwind
› Tailwind version? (v3 / v4): v4
```

**Bootstrap project:**

```text
› Project name: my-website
› Preset? (vanilla / tailwind / bootstrap): bootstrap
› Bootstrap version? (v4 / v5): v5
```

### What Gets Generated

After the prompts finish, WRIGHT creates the folder and all files, then prints a success
message. The generated project looks like this:

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

The `index.html` and `stylesheet.css` contents differ depending on the preset and version
you selected. For example, the Tailwind preset injects the Tailwind CDN link and
version-specific configuration into `index.html`, while the Bootstrap preset injects the
Bootstrap CDN link matching the chosen major version.

### Notes and Tips

> [!NOTE]
> **Working directory:** The project folder is created relative to where you run the
> command. Make sure you are in the parent directory where you want the new project to live.

> [!WARNING]
> **Existing folders:** If a folder with the same name already exists, WRIGHT will not
> overwrite it silently — check the prompt output for any warning.

> [!TIP]
> **No dependencies:** WRIGHT uses only built-in Node.js modules, so there is nothing extra
> to install after the global package.

> [!IMPORTANT]
> **Non-interactive use:** WRIGHT is designed as an interactive CLI. It does not currently
> accept flags for project name or preset, so it must be run in a terminal that supports
> interactive input.

## Screenshots

<p align="center">
  <img src="https://github.com/user-attachments/assets/36f49eee-5e12-4e27-a7b1-24fc71def6e1" alt="Running node wright.js in the terminal" width="24%" style="border-radius: 12px;" />
  <img src="https://github.com/user-attachments/assets/0b2ba309-1fe7-4668-815b-0a4214baf8bf" alt="WRIGHT prompting for the project name" width="24%" style="border-radius: 12px;" />
  <img src="https://github.com/user-attachments/assets/1fd88cbc-ad1e-425c-a3cd-73af902d438b" alt="Selecting the vanilla preset" width="24%" style="border-radius: 12px;" />
  <img src="https://github.com/user-attachments/assets/32d4a72a-fe6f-4857-9176-b20d9ec063f2" alt="WRIGHT success message after generating the project" width="24%" style="border-radius: 12px;" />
</p>

## Presets

WRIGHT ships with three built-in presets:

| Preset | Description | Versions |
| :--- | :--- | :---: |
| `vanilla` | Plain HTML / CSS / JavaScript project | — |
| `tailwind` | Tailwind CSS project via CDN | v3 / v4 |
| `bootstrap` | Bootstrap project via CDN | v4 / v5 |

Each preset generates the same base structure, but adapts `index.html` and `stylesheet.css`
to the selected framework and version.

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

The `core/` directory contains everything shared between presets, and each preset in
`presets/` only defines what is specific to its framework.

This makes it easy to add new presets (for example, Vue, React, Svelte, or Astro) without
duplicating logic.

## Philosophy

Create the structure once. Focus on building.

WRIGHT is designed to make the initial setup of a web project simple, fast, and organized.

## Author

[**Fouad Salehi**](https://github.com/fouad-salehi)

## License

WRIGHT is **proprietary software**.

You may view and run the project for personal or evaluation purposes only. Copying,
modifying, creating derivative works, incorporating the project into another project,
or redistributing modified versions is **not** permitted.

See the [LICENSE](./LICENSE) file for the complete terms.

## Copyright

Copyright © 2026 Fouad Salehi. All rights reserved.
