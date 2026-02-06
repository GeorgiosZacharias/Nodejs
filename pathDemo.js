import path from 'path';
import url from 'url';
const filePath = './dir1/dir2/test.txt'; // Example file path

//basename()
console.log(path.basename(filePath)); // last portion of a path


//dirname()
console.log(path.dirname(filePath)); // directory portion of a path

//extname()
console.log(path.extname(filePath)); // file extension (for example '.txt')

//parse()
const parsedPath = path.parse(filePath);
console.log(parsedPath); // returns an object with root, dir, base, ext, name properties

const __filename = url.fileURLToPath(import.meta.url); // __filename/dirname is not available in ES modules
const __dirname = path.dirname(__filename); 
console.log('__filename:', __filename);
console.log('__dirname:', __dirname);

// join()
// user/ geo pass this as argument to join() to create a path to test.txt
// user \ geo
const joinedPath = path.join(__dirname, 'dir1', 'dir2', 'test.txt'); // Joins multiple path segments into a single path, handling separators
console.log('Joined Path:', joinedPath);