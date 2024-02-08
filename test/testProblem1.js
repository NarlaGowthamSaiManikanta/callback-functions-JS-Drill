const {deleteJSONFile, createJSONFile} = require('../problem1.cjs');

let filePaths = ['./output/randomJSON1.json', './output/randomJSON2.json', './output/randomJSON3.json'];
let dataArray = ['{"a": 10}', '{a}', '{}'];

filePaths.forEach((filePath, index) => {
    let data = dataArray[index];

    createJSONFile(filePath, data)
    .then((resolvedFilePath) => {
        deleteJSONFile(resolvedFilePath);
    })
    .catch((rejectedReason) => {
        console.log(rejectedReason);
    });
});