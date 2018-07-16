const fs = require('fs');
const path = require('path');

let pathArr = [];

let getImagesPathList = (directory, extensionList) => {
    let files = "";
    try{
        files = fs.readdirSync(directory);
        files.forEach(file => {
            getImagesPathList(directory + '/' + file, extensionList);
        });
    }
    catch(error){
        if(isFileRequired(directory.split('/').pop(), extensionList)){
            pathArr.push(directory);
        }
    }   
}

let isFileRequired = (fileName, extensionList) => {
    let extension = fileName.split('.').pop();
    return extensionList.indexOf(extension) !== -1
}

let init = (initialDirectory, extensionList) => {
    initialDirectory = path.resolve(initialDirectory);
    getImagesPathList(initialDirectory, extensionList);
    return pathArr;
}

module.exports = init;
