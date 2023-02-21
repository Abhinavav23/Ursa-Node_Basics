const os = require('os');

// console.log(os);
/*
const freeMem = os.freemem()
// console.log(os.freemem());
console.log((freeMem/1024)/1024);

const totalMem = os.totalmem()
console.log((totalMem/1024)/1024);

console.log(os.cpus());
console.log(os.version());
console.log(os.arch());

console.log(os.networkInterfaces());
*/
console.log((os.uptime()/3600)/24);

console.log(os.homedir());