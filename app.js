const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove
yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

// Create list
yargs.command({
    command: 'list',
    describe: 'Lists all notes',
    handler(){
        console.log('Listing notes...')
    }
})

// Create read
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler(){
        console.log('Reading note...')
    }
})

// add, remove, read, list

yargs.parse()

//console.log(yargs.argv)