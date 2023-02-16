const http = require('http')

/* Usual set up of a server 
const server = http.createServer((req,res) => {
    res.end('Hello world')
}) */

// Using Event Emitter API
const server = http.createServer()

// instead of passing a callback function we use the ".on" method on server. 
// server emmits the request event and we can listen for it, subscribe to it or respond to ir however we cant to call it
// the event in this case is called request
// the callback function will be invoked every time someone visits our website (every time the request comes in)

server.on('request', (req,res) => {
    res.end('Welcome')
})

server.listen(5000)