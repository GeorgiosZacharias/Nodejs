
import 'dotenv/config';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
import http from 'http';

const port = process.env.PORT;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);

const server = http.createServer((req, res)=>{
    //res.setHeader('Content-Type','text/html');

    //res.end('<h1>Hello, World!</h1>');
    try{
        //check if get reuqest
        if(req.method === 'GET'){
            if(req.url === '/'){
             res.writeHead(200, {'Content-Type':'text/html'}); //write head with status code and content type
            res.end(('<h1>HomePage</h1>'));
            }else if(req.url === '/about'){
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(('<h1>About Page</h1>'));
            }else{
            res.writeHead(404, {'Content-Type':'text/html'});
            res.end(('<h1>404 Not Found</h1>'));
            }
    }else{
        throw new Error('Invalid request method');
    }
}catch(err){
     res.writeHead(500, {'Content-Type':'text/plain'});
            res.end(('Server Error'));
    }


   
});    

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});