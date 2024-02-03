const fs = require('fs');

function readingFileData(directory, filename, encoding) {
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
                throw err;
            }

            console.log(`${filePath} is read successful`);

            data = data.toUpperCase();
            writingFile(directory, `upper_${filename}`, data, readingUpperCaseFileData);
        });
    } else {
        console.log('Second Argument should be a string');
    }
}

function writingFile(directory, filename, data, cb) {
    let filePath = `${directory}/${filename}`;
    let filenamesFilePath = `${directory}/filenames.txt`;

    fs.writeFile(filePath, data, (err) => {
        if (err) {
            throw err;
        }

        console.log(`${filePath} file created.`);

        fs.appendFile(filenamesFilePath, `${filename}\n`, (err) => {
            if (err) {
                throw err;
            }

            console.log(`${filenamesFilePath} updated.`);
            cb(directory, filename, 'utf-8');
        });
    });
}

function readingUpperCaseFileData(directory, filename, encoding) {
    let filePath = `${directory}/${filename}`;

    fs.readFile(filePath, encoding, (err, data) => {
        if (err) {
            throw err;
        }

        console.log(`${filePath} is read successful`);

        data = data.toLowerCase();
        data = data.replace(/([.?!])\s*(?=[a-z])/g, '$1\n');
        writingFile(directory, `lower_${filename}`, data, readingLowerCaseFileData);
    });
}

function readingLowerCaseFileData(directory, filename, encoding) {
    let filePath = `${directory}/${filename}`;

    fs.readFile(filePath, encoding, (err, data) => {
        if (err) {
            throw err;
        }

        console.log(`${filePath} is read successful`);

        sentences = data.split('\n');
        sentences = sentences.sort();
        sortingSentences(sentences, directory, filename);
    });
}

function sortingSentences(sentences, directory, filename) {
    data = sentences.sort()
        .reduce((accumulator, sentence) => {
            return accumulator + '\n' + sentence;
        });
    writingFile(directory, `sorted_${filename}`, data, deleteCreatedFiles);
}

function deleteCreatedFiles(directory, filename, encoding) {
    let filenamesFilePath = `${directory}/filenames.txt`;

    fs.readFile(filenamesFilePath, encoding, (err, data) => {
        if (err) {
            throw err;
        }

        data = data.split('\n').slice(0, -1);
        data.push(filenamesFilePath.slice(5));

        data.forEach((fileName) => {
            let filePath = 'data/' + fileName;
            fs.unlink(filePath, (err) => {
                if (err) {
                    throw err;
                }

                console.log(`${filePath} file deleted`);
            });
        });
    });
}

module.exports = readingFileData;