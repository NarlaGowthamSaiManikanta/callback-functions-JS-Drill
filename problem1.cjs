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
    fs.unlink(filePath, (err) => {
        if (err) {
            throw err;
        }
        
        console.log(`${filePath} file deleted`);
    });
}

function createJSONFileWithCallBackOption(filePath, data, cb) {
    if (typeof filePath === 'string' && filePath.slice(-5) === '.json') {
        if (isJSON(data)) {
            fs.writeFile(filePath, data, (err) => {
                if (err) {
                    throw err;
                }

                console.log(`${filePath} file created.`);

                if (cb) {
                    cb(filePath);
                }
            });
        } else {
            console.log('data(second argument) should be JSON.');
        }
    } else {
        console.log('filePath(first argument) should be a string and filename should of ".json" extension.');
    }
}

module.exports = {
    deleteJSONFile, createJSONFileWithCallBackOption
};