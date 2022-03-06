const fs = require('fs')
const chalk = require('chalk')

const getNotes = (title)=>{
    const notes = loadNotes()
    const note = findNotes(notes, title)
    if(note)
    {
        console.log(chalk.inverse(note.title))  
        console.log(note.body)
        return
    }
    console.log(chalk.red.inverse('No notes found!'))
}

const getNotesList = ()=>{
    const notes = loadNotes()
    if(notes.length === 0)
    {
        console.log(chalk.red.inverse("No notes found!"))
        return
    }
    for(let i= 0; i < notes.length; i++)
    {
        console.log(chalk.blue(notes[i].title))
    }
}

const removeNotes =(title)=>{
    const notes = loadNotes()
    const filteredNotes = notes.filter(x=> x.title != title)
    if(filteredNotes.length !== notes.length)
    {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(filteredNotes)
        return 
    }
    console.log(chalk.red.inverse('No node found!')) 
}

const addNotes = (title, body)=>{
    const notes = loadNotes()
    const doesNoteExist = findNotes(notes, title)
    if(doesNoteExist.length == 0)
    {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    }
    else
    {
        console.log(chalk.red.inverse('Title already in use!'))
    }
}

const findNotes = (notes, title)=>{
    return notes.find(x=> x.title === title)
}

const saveNotes = function(note) {
    var noteString = JSON.stringify(note)
    fs.writeFileSync('notes.json',noteString)
}

const loadNotes = ()=>{
    try{
        const data = fs.readFileSync('notes.json').toString()
        const jsonData = JSON.parse(data)
        return jsonData
    }
    catch(e)
    {
        return []
    }
}

module.exports = {
    getNotes,
    addNotes,
    removeNotes,
    getNotesList
}