import path from 'path';

const filePath = './dir1/dir2/test.txt'; // Example file path

//basename()
console.log(path.basename(filePath)); // last portion of a path


//dirname()
console.log(path.dirname(filePath)); // directory portion of a path