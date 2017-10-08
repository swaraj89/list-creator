const fs = require('fs');

const chalk = require('chalk');

const { pretty } = require('./helpers/pretty-logger');
const log = console.log;

// const readFile = Promise.denodeify(require('fs').readFile);

function parse(filename, enc = 'UTF-8') {
    processFileContents(filename, enc)
        .then(data => {
            let lines = getAllLines(data);
            let trimmedLines = trimAll(lines);
            let allTaggedStrings = getAllTaggedStrings(trimmedLines);
            let listObj = getList(allTaggedStrings);

            pretty(true, listObj);
        })
        .catch(err => log(chalk.red(err)));
};

function getList(taggedStrings) {
    let taggedList = {};

    taggedStrings.map(string => {
        let splitted = string.split('#');
        let tag = splitted[1];
        let action = splitted[0];

        if (taggedList[tag]) {
            taggedList[tag].push(action);
        } else {
            taggedList[tag] = [action];
        }
    })

    return taggedList;
}

function getAllTaggedStrings(array) {
    return array.filter(str => str.indexOf('#') > -1);
}

function processFileContents(filename, enc) {
    return new Promise(function(resolve, reject) {
        fs.readFile(filename, enc, function(err, res) {

            if (err) { reject(err); }

            resolve(res);
        });
    });
};

function getAllLines(fileContent) {
    let lines = fileContent.toString().split("\n");

    return lines.filter(line => line !== '');
}

function trimAll(array) {
    return array.map(str => str.trim());
}

module.exports.parse = parse;