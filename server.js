
import 'dotenv/config';
import http from 'http';

const port = process.env.PORT;
const server = http.createServer((req, res)=>{
   
    //res.setHeader('Content-Type','text/html');

    //res.end('<h1>Hello, World!</h1>');
    if(req.url === '/'){
    res.writeHead(200, {'Content-Type':'text/html'}); //write head with status code and content type
    res.end(('<h1>HomePage</h1>'));
    }else if(req.url === '/about'){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(('<h1>About Page</h1>'));
    }else{
    res.writeHead(404, {'Content-Type':'text/html'});
    res.end(('<h1>404 Not Found</h1>'));
    }});    

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});