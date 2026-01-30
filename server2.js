
import { createServer } from 'http';


const port = process.env.PORT ;

const users = [
    {id:1, name:'Alice'},
    {id:2, name:'Bob'},
    {id:3, name:'Charlie'}
];

//logger middleware usually in different file
const logger = (req, res, next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
};

const jsonMiddleware = (req, res, next)=>{
    res.setHeader('Content-Type','application/json');
    next();
}

// route handler for /api/users 
const getUsersHandler = (req, res)=>{
    if(req.url === '/api/users' && req.method === 'GET'){
        res.write(JSON.stringify(users));
        res.end();    
    }
};

// route handler for /api/users:id
const getUserByIdHandler = (req, res)=>{
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));
    if (user){
        res.write(JSON.stringify(user));
    }else{
        res.statusCode = 404; // Not Found status
        res.write(JSON.stringify({message: 'User not found'}));
    }
    res.end();
};

//not found handler
const notFoundHandler = (req, res)=>{
    res.statusCode = 404;
    res.write(JSON.stringify({message: 'Route not found'}));
    res.end();
};
//route handler for post 
const createuserHandler = (req, res)=>{
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201; // Created status
        res.write(JSON.stringify(newUser));
        res.end();
    });
};
const server = createServer ((req, res)=>{ // Create HTTP server
    logger(req, res, ()=>{
      jsonMiddleware(req, res, ()=>{ 
        if(req.url === '/api/users' && req.method === 'GET'){
            getUsersHandler(req, res);
        } else if(req.url.match(/\/api\/users\/\d+/) && req.method === 'GET') {
            getUserByIdHandler(req, res);
        }else if(req.url === '/api/users' && req.method === 'POST') {
            createuserHandler(req, res);
        } else {
            notFoundHandler(req, res);
        }
      }); // Call json middleware
    }); // Call logger middleware
}); // End createServer

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});