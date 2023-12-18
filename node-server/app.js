const http = require('http');

// this creates a server object
const server = http.createServer((req, res)=>{
    //this callback will run every time an http request comes
    // console.log('New request comes.')

    // console.log(`url=>${req.url}`, req.method, req.headers)
    const url = req.url
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Enter a message</title></head>')
        res.write('<body><form action="/message" method="POST"><input name="message"/><button type="submit">Submit</button></form></body>')
        res.write('</html>')
        return res.end()
    }

    // execute only if url is not '/'
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<body>')
    res.write('<h1>')
    res.write('Hello from Node.js server response!!')
    res.write('</h1>')
    res.write('</body>')
    res.write('</html>')
    res.end()
})

// this listen method is used to bind and listen for incoming connections on a specified port and hostname
server.listen(3000, (req, response)=>{
    console.log('listening')
})