import http from 'http';

const port = 8000;
const server = http.createServer((req, res)=>{
    res.write('hello world');
    res.end();
});

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});