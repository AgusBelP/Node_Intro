const { read } = require('fs');
const http = require('http');

//.end: This method signals to the server that all of the response headers and body have been sent; that server should consider this message complete. The method, response.end(), MUST be called on each response.

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end('Welcome to our homepage');
    }
    if(req.url == '/about'){
        res.end('Here is our short history')
    }
    res.end(`<h1>Oops!</h1>
    <p>We can't seem to find the page that you're looking for </p>
    <a href="/">back home</a>`)

})

server.listen(5000)