

const fs=require('node:fs');

fs.readFile('./Files/start.txt','utf-8', (error1, data1)=>{
  console.log(data1)
  fs.readFile(`./Files/${data1}.txt`,'utf-8', (error2,data2)=>{
    console.log(data2)
  })
})

console.log('Reading File...')