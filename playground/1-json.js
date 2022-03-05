const fs = require('fs')

const bufferData = fs.readFileSync('1-json.json').toString()
const data = JSON.parse(bufferData)
data.name = 'Devanshi'
data.age = '26'
const stringData = JSON.stringify(data)
fs.writeFileSync('1-json.json',stringData)