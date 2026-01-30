
import { createServer } from 'http';


const port = process.env.PORT ;

const users = [
    {id:1, name:'Alice'},
    {id:2, name:'Bob'},
    {id:3, name:'Charlie'}
];
const server = createServer ((req, res)=>{ // Create HTTP server
    if(req.url === '/api/users' && req.method === 'GET'){ // Check for specific route and method
        res.setHeader('Content-Type','application/json');
        res.write(JSON.stringify(users));
        res.end();
    }else{
        res.setHeader('Content-Type','application/json');
        res.statusCode = 404; // Not Found status
        res.write(JSON.stringify({message: 'Route not found'}));
        res.end();

    }
});


server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});