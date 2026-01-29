import http from 'http';

const port = 8000;
const server = http.createServer((req, res)=>{
   
    //res.setHeader('Content-Type','text/html');

    //res.end('<h1>Hello, World!</h1>');

    res.writeHead(200, {'Content-Type':'application/json'}); //write head with status code and content type
    res.end(JSON.stringify({message: 'Server'}));
});

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});