
import 'dotenv/config';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
import http from 'http';

const port = process.env.PORT;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);

const server = http.createServer(async (req, res)=>{
    //res.setHeader('Content-Type','text/html');

    //res.end('<h1>Hello, World!</h1>');
    try{
        //check if get reuqest
        if(req.method === 'GET'){
            let filePath;
            if(req.url === '/'){
               filePath = path.join(__dirname, 'public', 'index.html');
           
            }else if(req.url === '/about'){
               filePath = path.join(__dirname, 'public', 'about.html');
            }else{
                throw new Error('Not found');
            }
            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type','text/html');
            res.write(data);
            res.end();
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