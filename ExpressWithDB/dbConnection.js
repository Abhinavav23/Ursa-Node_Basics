const {connect} = require('mongoose');

connect('mongodb://localhost:27017/NSUrsaAndJuno')
.then(() => {
    console.log(`connection with DB successful`);
})
.catch(() => {
    console.log(`something went wrong!!`);
})

