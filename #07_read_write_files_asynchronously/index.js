

const fs=require('node:fs');

fs.readFile('./Files/start.txt','utf-8', (error1, data1)=>{
  console.log(data1)
})

console.log('Reading File...')