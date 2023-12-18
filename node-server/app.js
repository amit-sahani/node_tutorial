const http = require('http');

// this creates a server object
const server = http.createServer((req, response)=>{
    //this callback will run every time an http request comes
    console.log('New request comes.')
})

// this listen method is used to bind and listen for incoming connections on a specified port and hostname
server.listen(3000, (req, response)=>{
    console.log('listening')
})