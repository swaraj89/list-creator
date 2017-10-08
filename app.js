const yargs = require('yargs');
const chalk = require('chalk');

const { create } = require('./src/list-creator.js');
const { parse } = require('./src/list-parser.js');

const log = console.log;

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