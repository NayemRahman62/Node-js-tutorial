const fs= require('node:fs');

fs.readFile('./Files/input.txt','utf-8', (err,data)=>{
  console.log(data)
})

console.log('Reading file...')



