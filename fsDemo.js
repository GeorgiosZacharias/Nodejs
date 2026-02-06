// e
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
fs.readFile('./test.txt','utf-8').then(data => {
    console.log('File content (promise):', data);
}).catch(err => {
    console.error('Error reading file (promise):', err);
}
)
