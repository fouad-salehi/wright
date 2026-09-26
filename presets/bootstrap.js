const buildIndex = (projectName, isV5) => {
    const cssCdn = isV5
        ? 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'
        : 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css';

    const jsCdn = isV5
        ? 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'
        : 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js';

    return `<!DOCTYPE html>
<html lang="en">
    <head>
        <title>${projectName} | Powered by WRIGHT</title>

        <meta charset="UTF-8">
        <meta name="description" content="">
        <meta name="keywords" content="">
        <meta name="author" content="Fouad Salehi">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link href="${cssCdn}" rel="stylesheet">

        <link rel="stylesheet" href="dashboard/assets/css/stylesheet.css" type="text/css">
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
        <link rel="apple-touch-icon" href="favicon.ico" type="image/x-icon">
    </head>

    <body>
        <header></header>

        <main>
            <article>
                <h1>${projectName}</h1>
            </article>

            <aside></aside>
        </main>

        <footer></footer>

        <script src="${jsCdn}"></script>
        <script src="dashboard/assets/js/app.js" type="text/javascript"></script>
    </body>
</html>`;
};

const buildCSS = () => {
    return `@charset "UTF-8";

:root {
    --background: #ffffff;
    --foreground: #111111;
    --muted: #666666;
}

* {
    margin: 0;
    border: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: var(--background);
    color: var(--foreground);
    font-family: Arial, sans-serif;
}

main {
    width: 100%;
    max-width: 900px;
}

h1 {
    font-size: clamp(2rem, 5vw, 4rem);
    font-weight: 600;
    letter-spacing: -0.04em;
}

p {
    color: var(--muted);
    line-height: 1.6;
}`;
};

module.exports = {
    name: 'bootstrap',
    label: 'WRIGHT for Bootstrap',

    folders: [
        'dashboard',
        'dashboard/assets',
        'dashboard/assets/css',
        'dashboard/assets/js',
        'dashboard/assets/images',
        'dashboard/assets/fonts',
    ],

    files: ({ projectName, bootstrapVersion }) => {
        const isV5 = bootstrapVersion === 'v5';

        return {
            'index.html': buildIndex(projectName, isV5),
            'dashboard/assets/css/stylesheet.css': buildCSS(),
            'dashboard/assets/js/app.js': '',
        };
    },

    features: ({ bootstrapVersion }) => [
        'Clean and organized project structure',
        'Ready-to-use HTML entry file',
        `Bootstrap ${bootstrapVersion === 'v5' ? '5.3.3' : '4.6.2'} included through CDN`,
        'Separate folders for CSS, JavaScript, images, and fonts',
        'Basic stylesheet included',
        'JavaScript entry file included',
        'Favicon support',
        'Project README included automatically',
        'Suitable for HTML, CSS, JavaScript, PHP, Bootstrap, and related libraries and frameworks',
    ],

    structure: (projectName) => {
        return `${projectName}/
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
└── README.txt`;
    },

    extraSections: ({ bootstrapVersion }) => {
        const isV5 = bootstrapVersion === 'v5';
        const version = isV5 ? '5.3.3' : '4.6.2';
        const cssCdn = isV5
            ? 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'
            : 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css';

        return `## Bootstrap

Bootstrap ${version} is included through the official jsDelivr CDN.

CDN: ${cssCdn}

Bootstrap CSS is loaded in:

index.html

Bootstrap JavaScript is also loaded automatically through the Bootstrap bundle.

You can start using Bootstrap classes directly in your HTML.
`;
    },
};