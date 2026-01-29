
import 'dotenv/config';
import http from 'http';

const port = process.env.PORT;
const server = http.createServer((req, res)=>{
   
    //res.setHeader('Content-Type','text/html');

    //res.end('<h1>Hello, World!</h1>');

    res.writeHead(200, {'Content-Type':'application/json'}); //write head with status code and content type
    res.end(JSON.stringify({message: 'Server TEST'}));
});

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});