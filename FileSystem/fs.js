// File system CRUD

const fs = require("fs");

const fsPromise = require('fs/promises');
/*
// working with Directories

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


fs.readdir('Filesystem', (e, files) => {
    if(e){
        console.log(`error occured: ${e.message}`);
    } else{
        console.log('getting files here');
        console.log(files);
    }
})

fs.rm('FileSystem/my',{recursive: true},  (err) => {
  if(err){
    console.log(`error occured: ${err.message}`);
  } else{
    console.log('deleted successfully');
  }
})


// CRUD on files
// if file is not there then it will create one, and then write the content
// if file is there already then it will overwrite the content in that file
fs.writeFile('Filesystem/myFile.txt', 'hi this is Abhinav', (err) => {
  if(err){
    console.log(`error occured: ${err.message}`);
  }
})


// if file is not there then it will create one, and then write the content
// if file is there already then it will append the content in that file
fs.appendFile('Filesystem/File.txt', '\nHi this line no 1', (err) => {
  if(err){
    console.log(`error occured: ${err.message}`);
  }else{
    console.log('file appended successfully');
  }
})

// open
fs.open('Filesystem/File.txt', 'r', (err, file) => {
  if(err){
    console.log(`error occured: ${err.message}`);
  }else{
    console.log(file);
    console.log('file appended successfully');
  }
})


fs.readFile('Filesystem/File.txt', 'utf-8', (err, file) => {
  if(err){
    console.log(`error occured: ${err.message}`);
  }else{
    // console.log(file+'');
    console.log(file);
    console.log('file reading successfully');
  }
})
*/

// fs.unlink('Filesystem/myFile.js', (err) => {
//   if(err){
//     console.log(`error occured: ${err.message}`);
//   } else{
//     console.log('file deleted successfully');
//   }
// })

const deleteFile = async() => {
  await fsPromise.unlink('Filesystem/myFile.txt');
}

deleteFile();

// (function(){

// })()


// const myFileWriter = (filename, content) => {
//   fs.writeFile(filename, content, (err) => {
//     if(err)
//     console.log(err);
//   })
// }


// const myFileReader = async(filename) => {
//   const fileContent = await fsPromise.readFile(filename)
//   return fileContent.toString()
// }



// fetch('https://myapi.com')
// .then((data) => {

// })
// .catch(() => {

// })

// const callmyApi = async() => {
//   await fetch('https://myapi.com')
// }