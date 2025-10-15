const http = require('http')

const myServer = http.createServer((req, res)=>{
    res.end('Hello from the Server, once again')
})

// to run a server we need to initialise this with a port
myServer.listen(8000, ()=>{
    console.log("Server Started")
})