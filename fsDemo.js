// e
import { read } from 'fs';
import fs from 'fs/promises';


// //readFile() -- callbac version

// fs.readFile('./test.txt','utf-8',(err, data )=> {
//     if(err){
//         console.error('Error reading file:', err);
//     }else{
//         console.log('File content:', data);
//     }
// });

// //readFileSync() -- synchronous version
// try{ // This will block the event loop until the file is read ,
// //if it's large file, it can cause performance issues
//     const data = fs.readFileSync('./test.txt','utf-8');
//     console.log('File content (sync):', data);
// }catch(err){
//     console.error('Error reading file (sync):', err);
// }

//readFile() -- promise.then() version
// fs.readFile('./test.txt','utf-8').then(data => {
//     console.log('File content (promise):', data);
// }).catch(err => {
//     console.error('Error reading file (promise):', err);
// }
// )

//readfile() -- async/await version
const readFileAsync = async () => {
    try{
        const data = await fs.readFile('./test.txt','utf-8');
        console.log('File content (async/await):', data);
    }catch(err){
        console.error('Error reading file (async/await):', err);
    }
}

readFileAsync();

//write file() -- async/await version
const writeFileAsync = async () => {
    try{
        await fs.writeFile('./output.txt','This is some output text');
        console.log('File written successfully');
    }catch(err){
        console.error('Error writing file:', err);
    } 
}
writeFileAsync();

//append file() -- async/await version
const appendFileAsync = async () => {
    try{
        await fs.appendFile('./output.txt','\nThis is some appended text');
        console.log('File appended successfully');
    }catch(err){
        console.error('Error appending file:', err);
    }
}
appendFileAsync();