const {connect} = require('mongoose');

const URL = process.env.MONGODB_CONNECTION_URL
const options = {
    dbName: 'NSUsers'
}
connect(URL, options)
.then(() => {
    console.log(`Database connection is successful`);
})
.catch(() => {
    console.log(`something went wrong`);
})