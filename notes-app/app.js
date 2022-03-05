const chalk = require('chalk')
const yargs = require('yargs')
const getNotes  = require('./notes.js')

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
    handler:function(argv) {
        console.log('Adding a new note!', argv.title, argv.body)
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
    handler:function() {
        console.log('Remove a note')
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
    handler:function() {
        console.log('Read a note')
    }
})
yargs.command({
    command:'list',
    decribe:'List all nodes',
    handler:function() {
        console.log('List all nodes')
    }
})
console.log(yargs.argv)
