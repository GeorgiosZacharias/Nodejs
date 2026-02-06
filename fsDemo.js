import fs from 'fs';


//readFile() -- callbac version

fs.readFile('./test.txt','utf-8',(err, data )=> {
    if(err){
        console.error('Error reading file:', err);
    }else{
        console.log('File content:', data);
    }
});