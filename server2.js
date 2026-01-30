import {createServer} from 'http';


const port = process.env.PORT;
const users = [
    {id:1, name:'Alice'},
    {id:2, name:'Bob'},
    {id:3, name:'Charlie'}
];
const server = createServer ((req, res)=>{
    
});


server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});