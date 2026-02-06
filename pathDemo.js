import path from 'path';

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