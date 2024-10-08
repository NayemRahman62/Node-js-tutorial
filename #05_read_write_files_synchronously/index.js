const fs= require('node:fs');

let textIn= fs.readFileSync('./Files/input.txt','utf-8')

console.log(textIn)

fs.writeFileSync('./Files/output.txt',textIn)

