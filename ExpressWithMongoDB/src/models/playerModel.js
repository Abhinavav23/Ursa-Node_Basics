const mongoose = require('mongoose');

const Schema = mongoose.Schema

const playerSchema = new Schema({
    name: String,
    score: Number,
    team: String
}, {versionKey: false})

// first arg --> name of the collection, 
// 2nd arg --> schema we created
const Player = mongoose.model("player", playerSchema);

module.exports = Player