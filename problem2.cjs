const fs = require('fs');

function readingFile(directory, filename, encoding) {
    return new Promise((resolve, reject) => {
        if (typeof filename === 'string') {
            if (!directory) {
                directory = '.';
            }
    
            let filePath = `${directory}/${filename}`;
    
            if (!encoding) {
                encoding = 'utf-8';
            }
    
            fs.readFile(filePath, encoding, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    console.log(`${filePath} is read successful`);
                    resolve(data);
                }
            });
        } else {
            reject('Second Argument should be a string');
        }
    });
}

function writingFile(directory, filename, data) {
    return new Promise((resolve, reject) => {
        let filePath = `${directory}/${filename}`;
        let filenamesFilePath = `${directory}/filenames.txt`;

        fs.writeFile(filePath, data, (err) => {
            if (err) {
                reject(err);
            } else {
                console.log(`${filePath} file created.`);

                fs.appendFile(filenamesFilePath, `${filename}\n`, (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        console.log(`${filenamesFilePath} updated.`);
                        resolve(filename);
                    }
                });
            }
        });
    });
}

function splitingIntoSentences(rawData) {
    return rawData.replace(/([.?!])\s*(?=[a-z])/g, '$1\n');
}

function sortingSentences(rawData) {
    sentences = rawData.split('\n');
    return sentences.sort()
        .reduce((accumulator, sentence) => {
            return accumulator + '\n' + sentence;
        });
}

function deleteCreatedFiles(directory, encoding) {
    return new Promise((resolve, reject) => {
        let filenamesFilePath = `${directory}/filenames.txt`;

        fs.readFile(filenamesFilePath, encoding, (err, data) => {
            if (err) {
                reject(err);
            }

            data = data.split('\n');
            if (data[data.length - 1] === '') {
                data = data.slice(0, -1);
            }
            data.push(filenamesFilePath.slice(directory.length+1));

            data.forEach((fileName) => {
                let filePath = `${directory}/${fileName}`;
                fs.unlink(filePath, (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        console.log(`${filePath} file deleted`);
                        resolve(`${filePath} file deleted`);
                    }
                });
            });
        });
    })
}

module.exports = {
    readingFile, writingFile, splitingIntoSentences, sortingSentences ,deleteCreatedFiles
};