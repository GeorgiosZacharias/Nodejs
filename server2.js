
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
    }else if(req.url.match(/^\/api\/users\/([0-9]+)/) && req.method === 'GET'){ //harder without express
         const id = req.url.split('/')[3];
         const user = users.find((user) => user.id === parseInt(id));
          res.setHeader('Content-Type','application/json'); // since we use json
         if (user){
            res.write(JSON.stringify(user));
         }else{
            res.statusCode = 404; // Not Found status
            res.write(JSON.stringify({message: 'User not found'}));
         }
         res.end();
    }
    else{
        res.setHeader('Content-Type','application/json');
        res.statusCode = 404; // Not Found status
        res.write(JSON.stringify({message: 'Route not found'}));
        res.end();

    }
});


server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});