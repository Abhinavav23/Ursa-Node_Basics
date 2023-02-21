// File system CRUD

const fs = require("fs");
/*
// fs.mkdir('FileSystem/new', (err) => {
//     console.log(err);
// })
console.log('start');

fs.mkdir("FileSystem/myDir/abhinav", { recursive: true }, (err) => {
  if(err){
    console.log(err);
  }else{
    console.log('created successfully');
  }
});

// sycronous execution of mkdir
fs.mkdirSync('FileSystem/my')

console.log('end');
*/

fs.readdir('Filesystem', (e, files) => {
    if(e){
        console.log(`error occured: ${e.message}`);
    } else{
        console.log('getting files here');
        console.log(files);
    }
})

