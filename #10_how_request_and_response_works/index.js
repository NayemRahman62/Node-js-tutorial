
const http=require('http')
const fs=require('node:fs')


const html=fs.readFileSync('./Template/index.html', 'utf-8')

// create the server

const server= http.createServer((request,response)=>{

  // response.end('This is my response for your request')
  // response.end('<h1>This is home page<h1>')
  response.end(html)

  console.log('New request received.')
   //console.log(request)
   //console.log(response)

})


// start the server
server.listen(8000, '127.0.0.1', ()=>{
  console.log('Server has started!')
})