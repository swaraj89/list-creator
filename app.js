const yargs = require('yargs');
const chalk = require('chalk');

const { create } = require('./src/list-creator.js');
const { parse } = require('./src/list-parser.js');

const log = console.log;

/* 
    This app takes a file, prases it and gives user a file with list of 
    items under hashtags. 
    
    Example 
        *********
            Saga #referlatter

            Code be ur document
            Why did u update #refer


            REUSABLE COMPONENTS

            REDUX-SAGA
            *codebrahma


            HR: rupesh.

            6-in-1
            What the flex box? #refer
            necolas/React-native-web > for web #google
        *********

        O/P:
            REFER
                1. Why did u update
                2. What the flex box?
            
            GOOGLE
                1. necolas/React-native-web > for web

    App would take one input.
        1. File where notes was taken
    
    App would give the following.
        1. File with the above output

    `node app.js -p path\to\file`
*/
let cpu = {
    totalPercent: 100,
    used: 5,
    total: 10,
};

const argv = yargs
    .options({
        p: {
            demandOption: true,
            alias: 'parse',
            describe: 'path\to\file where you have captured the notes',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

let notesFile = argv.p;

parse(notesFile);