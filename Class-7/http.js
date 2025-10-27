const http = require('http')

const myServer = http.createServer((req, res)=>{
    console.log(req.url)
    //res.end('Hello from the Server, once again')

    switch (req.url) {
        case '/':
            res.end('Hello from the Server, once again')
            break;
        case '/about':
            res.end('This is the about page')
            break
        case '/contact':
            res.end('This is the contact page')
            break
        default:
            res.end('Default page')
            break;
}
})

// to run a server we need to initialise this with a port
myServer.listen(8000, ()=>{
    console.log("Server Started")
})