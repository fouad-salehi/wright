const buildIndex = (projectName) => {
    return `<!DOCTYPE html>
<html lang="en">
    <head>
        <title>${projectName} | Powered by WRIGHT</title>

        <meta charset="UTF-8">
        <meta name="description" content="">
        <meta name="keywords" content="">
        <meta name="author" content="Fouad Salehi">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

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
    name: 'vanilla',
    label: 'WRIGHT',

    folders: [
        'dashboard',
        'dashboard/assets',
        'dashboard/assets/css',
        'dashboard/assets/js',
        'dashboard/assets/images',
        'dashboard/assets/fonts',
    ],

    files: ({ projectName }) => ({
        'index.html': buildIndex(projectName),
        'dashboard/assets/css/stylesheet.css': buildCSS(),
        'dashboard/assets/js/app.js': '',
    }),

    features: () => [
        'Clean and organized project structure',
        'Ready-to-use HTML entry file',
        'Separate folders for CSS, JavaScript, images, and fonts',
        'Basic stylesheet included',
        'JavaScript entry file included',
        'Favicon support',
        'Project README included automatically',
        'Suitable for HTML, CSS, JavaScript, PHP, and related libraries and frameworks',
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
};