const {Schema, model} = require('mongoose');
const paginate = require('mongoose-paginate-v2');
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    age: Number,
    student: Boolean
}, {versionKey: false})





userSchema.plugin(paginate);

const User = model('student', userSchema);

module.exports = User
