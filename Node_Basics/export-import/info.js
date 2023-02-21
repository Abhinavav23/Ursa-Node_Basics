const {} = require('./info2')

const name = "Abhinav";

const address = "India";

const role = "Instructor";

console.log('this is from info file line 1');


function test(){
    console.log('this is test');
}

// test();
module.exports = {
  name,
  address,
  role,
};

console.log('this is from info file line 2');

