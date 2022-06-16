const http = require('http');
const fs = require('fs')


const port = 8080
const host = 'localhost'


const tempHome = fs.readFileSync(`${__dirname}/HTML/home.html`, 'utf-8')
const tempAbout = fs.readFileSync(`${__dirname}/HTML/about.html`, 'utf-8')
const tempContact = fs.readFileSync(`${__dirname}/HTML/contact.html`, 'utf-8')

const server = http.createServer((req, res)=> {
    if( req.url === '/' || req.url === '/home'){
        res.writeHead(200, {
            'Content-type': 'text/html'
          });
          res.end(tempHome)
    } else if(req.url === '/about'){
        res.writeHead(200, {
            'Content-type': 'text/html'
          });
          res.end(tempAbout)
    }else if (req.url  === '/contact'){
        res.writeHead(200, {
            'Content-type': 'text/html'
          });
          res.end(tempContact)
    }else{
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
          });
          res.end('<h1>Page not found!</h1>');
    }
}) 
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})