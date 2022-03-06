const chalk = require('chalk')
const yargs = require('yargs')
const notes  = require('./notes.js')
const fs = require('fs')
// add, remove, read, list
//create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    }
})
yargs.command({
    command:'remove',
    decribe:'Remove an existing note',
    builder: {
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title)
    }
})
yargs.command({
    command:'read',
    decribe:'Read an existing note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        notes.getNotes(argv.title)
    }
})
yargs.command({
    command:'list',
    decribe:'List all nodes',
    handler() {
        notes.getNotesList()
    }
})
yargs.parse()
