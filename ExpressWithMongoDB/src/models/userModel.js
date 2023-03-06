// schema --> architecture/structure of a document
// the keys/properties in the document which will be receiving values from client


// Model: which allows us to do operations on Data --> CRUD

const mongoose = require('mongoose');

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    age: Number
}, {versionKey: false})

// first arg --> name of the collection, 
// 2nd arg --> schema we created
const User = mongoose.model("user", userSchema);

module.exports = User