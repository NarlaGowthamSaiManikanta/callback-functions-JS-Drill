const {
    readingFile, writingFile, splitingIntoSentences, sortingSentences, deleteCreatedFiles
}
    = require('../problem2.cjs');

const directory = 'data';
const filename = 'lipsum_1.txt';
const encoding = 'utf-8';

readingFile(directory, filename, encoding)
    .then((resolvedData) => {
        return writingFile(directory, `upper_${filename}`, resolvedData.toUpperCase());
    })
    .then((createdFilename) => {
        return readingFile(directory, createdFilename, encoding);
    })
    .then((resolvedData) => {
        splittedData = splitingIntoSentences(resolvedData.toLowerCase());
        return writingFile(directory, `lower_${filename}`, splittedData);
    })
    .then((createdFilename) => {
        return readingFile(directory, createdFilename, encoding);
    })
    .then((resolvedData) => {
        sortedData = sortingSentences(resolvedData);
        return writingFile(directory, `sorted_${filename}`, sortedData);
    })
    .then((createdFilename) => {
        return deleteCreatedFiles(directory, encoding);
    })
    .catch((rejectedReason) => {
        console.log(rejectedReason);
    })
