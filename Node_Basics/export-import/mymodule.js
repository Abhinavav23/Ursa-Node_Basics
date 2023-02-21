const {add, multiply} = require('ns-ursa-first-module');
// const calculations = require('./info');

// it runs the whole code written in the file we are using require on
const {name, address} = require('./info');

// console.log(calculations);
// calculations.add(10,5);
// calculations.multiply(9,4);


console.log(`name is ${name}`);
console.log(`address is ${address}`);

add(10,4);
multiply(2,4);