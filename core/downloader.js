const https = require('https');
const fs = require('fs');

const download = (url, destination) => {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                response.resume();
                reject(new Error(`HTTP ${response.statusCode}`));
                return;
            }

            const stream = fs.createWriteStream(destination);

            response.pipe(stream);

            stream.on('finish', () => {
                stream.close();
                resolve();
            });

            stream.on('error', (err) => {
                reject(err);
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
};

module.exports = {
    download,
};