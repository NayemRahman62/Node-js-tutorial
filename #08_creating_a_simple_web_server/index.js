
const http=require('http')

// create the server

const server= http.createServer((request,response)=>{

  response.end('This is my response for your request')
  // console.log('New request received.')
  // console.log(request)
  // console.log(response)

})


// start the server
server.listen(8000, '127.0.0.1', ()=>{
  console.log('Server has started!')
})