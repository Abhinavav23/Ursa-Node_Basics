const Player = require('../models/PlayerModel');
const User = require('../models/userModel');

const getAllUsers = (req, res) => {
    // Read Operation
    console.log('getting all users');
    // return an array of all the documents
    User.find()
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        res.send({err})
    })
}

const getUserByEmail = (req, res) => {
    console.log('params',req.params); 
    const {email} = req.params
    // returns an array 
    User.find({email, age: 28})
    .then((user) => {
        console.log('user found');
        res.send(user)
    })

    // returns a document
    // User.findOne({email})
    // .then((user) => {
    //     console.log('user found');
    //     res.send(user)
    // })
}

const getUserByAge = (req, res) => {
    console.log('params',req.query); 
    // const {age} = req.params
    // returns an array of documents matching the condition
    // User.find({age: req.query.age})
    // .then((user) => {
    //     console.log('user found');
    //     res.send(user)
    // })

    // return one single document
    // in case of multiple match return first document
    // User.findOne({age: req.query.age })
    // .then((user) => {
    //     console.log('user found');
    //     res.send(user)
    // })

    // to select some specific fields from doc
    // User.find({age: req.query.age}).select('username email')
    // .then((user) => {
    //     console.log('user found');
    //     res.send(user)
    // })

    // User.find({age: req.query.age}).select({username: 1})
    // User.find({age: req.query.age}).select(['-username'])

    // to remove some specific fields

    // User.find({age: req.query.age}).select({username: 0})
    // .then((user) => {
    //     console.log('user found');
    //     res.send(user)
    // })

    // limit the no of document returned
    // User.find({age: req.query.age})
    // .select({username: 1, age: 1})
    // .limit(2)
    // .then((user) => {
    //     console.log('user found');
    //     res.send(user)
    // })

    // User.find()
    // .limit(3)
    // .then((user) => {
    //     console.log('user found');
    //     res.send(user)
    // })

    // skips the no of values passed as args
    // User.find()
    // .skip(1)
    // .then((user) => {
    //     console.log('user found');
    //     res.send(user)
    // })

    User.find()
    // .count()
    .countDocuments()
    .then((userCount) => {
        console.log('user found');
        res.send({count: userCount})
    })

    // Arithmatic operators --     >, <, >=, <=

   

}


const createUser = (req, res) => {
    // create operation
    console.log('create user', req.body);
    // this returns a promise
    User.create(req.body)
    .then((data) => {
        console.log('data', data);
        res.send(data);
    })
    .catch((err) => {
        console.log('error occured', err);
        res.send('Something went wrong')
    })
}

const createMultiplePlayers = (req, res) => {
    console.log('create user', req.body);
    // this will create multiple players in one go
    // req.body should be an array
    Player.insertMany(req.body)
    .then((playerData) => {
        console.log('playerData', playerData);
        res.send('players created successfully')
    })
}

const getPlayers = (req, res) => {

    // Player.find()
    // .then((player) => {
    //     res.send(player)
    // })

    // Player.find({score: {$gt: 50}}) // >50
    // .then((player) => {
    //     res.send(player)
    // })

    // Player.find({score: {$gte: 50}}) // >=50
    // .then((player) => {
    //     res.send(player)
    // })

    // Player.find({score: {$lt: 50}}) // <50
    // .then((player) => {
    //     res.send(player)
    // })

    // Player.find({score: {$lte: 50}}) // <=50
    // .then((player) => {
    //     res.send(player)
    // })

    // Player.find({score: {$ne: 50}})
    // .then((player) => {
    //     res.send(player)
    // })

    // Player.find({score: {$in: [50, 40, 15]}})
    // .then((player) => {
    //     res.send(player)
    // })

    // Player.find({score: {$nin: [50]}})
    // .then((player) => {
    //     res.send(player)
    // })


    // logical operators ---> AND, OR, NOR, NOT

    // Player.find({$and: [{team: 'Australia'}, {score: 44}]})
    // .then((player) => {
    //     res.send(player)
    // })

    // Player.find({$or: [{team: 'Australia'}, {score: 50}]})
    // .then((player) => {
    //     res.send(player)
    // })

    // neglect cases
    // Player.find({team: {$regex: 'AustraliA|nz', $options: 'i'}})
    // .then((player) => {
    //     res.send(player)
    // })

    Player.find({name: {$regex: /^R/, $options: 'i'}})
    .then((player) => {
        res.send(player)
    })

    // ends with sharma
    // Player.find({name: {$regex: /sharma$/, $options: 'i'}})
    // .then((player) => {
    //     res.send(player)
    // })









    

}

const updatePlayer = (req, res) => {
    console.log('id', req.params.id);

    // needs id of the document
    // returns the document data back
    // Player.findByIdAndUpdate(req.params.id, {$set: req.body})
    // .then((data) => {
    //     console.log(data);
    //     res.send('player updated successfully')
    // })

    Player.updateOne({name: 'Arron finch'}, req.body)
    .then((info) => {
        console.log('info', info);
        res.send('updated successfully')
    })







    // res.send('updating player')
}

module.exports = {
    getAllUsers,
    createUser,
    getUserByEmail,
    getUserByAge,
    createMultiplePlayers,
    getPlayers,
    updatePlayer
}