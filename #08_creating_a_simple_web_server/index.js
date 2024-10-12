
const http=require('http')

// create the server

const server= http.createServer((request,response)=>{
  console.log('New request received.')
})


// start the server
server.listen(8000, '127.0.0.1', ()=>{
  console.log('Server has started!')
})