

const fs=require('node:fs');

fs.readFile('./Files/start.txt','utf-8', (error1, data1)=>{
  console.log(data1)
  fs.readFile(`./Files/${data1}.txt`,'utf-8', (error2,data2)=>{
    console.log(data2)
    fs.readFile('./Files/append.txt','utf-8',(error3,data3)=>{
      console.log(data3)
      fs.writeFile('./Files/output.txt', `${data1}\n\n${data2}\n\n${data3}\n\nDate created:${new Date()}`, ()=>{
        console.log('File written successfully')
      })
    })
  })
})

console.log('Reading File...')