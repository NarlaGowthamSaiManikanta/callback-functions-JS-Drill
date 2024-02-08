const fs = require('fs');

function isJSON(data) {
    try {
        JSON.parse(data);
    } catch (err) {
        return false;
    }
    return true;
}

function deleteJSONFile(filePath) {
   return new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) => {
            if (err) {
                reject(err);
            } else {
                console.log(`${filePath} file deleted`);
                resolve(`${filePath} file deleted`);
            }
        });
   });
}

function createJSONFile(filePath, data) {
    return new Promise((resolve, reject) => {
        if (typeof filePath === 'string' && filePath.slice(-5) === '.json') {
            if (isJSON(data)) {
                fs.writeFile(filePath, data, (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        console.log(`${filePath} file created.`);
                        resolve(filePath);
                    }
                });
            } else {
                reject('data(second argument) should be JSON.');
            }
        } else {
            reject('filePath(first argument) should be a string and filename should of ".json" extension.');
        }
    });
}

module.exports = {
    deleteJSONFile, createJSONFile
};