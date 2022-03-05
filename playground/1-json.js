const fs = require('fs')
// const book = {
//     title:'Ego is the enemy',
//     author:'Ryan Holiday'
// }
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)
const buffer = fs.readFileSync('1-json.json')
console.log(buffer.toString())