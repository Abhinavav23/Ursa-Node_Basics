const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

const createUser = (req, res) => {
  console.log("body", req.body);
  const { name, email, password, mobile, batch } = req.body;

  const saltRounds = bcrypt.genSaltSync(10);
  const securePassword = bcrypt.hashSync(password, saltRounds);
  console.log("securePassword", securePassword);

  UserModel.create({ name, email, password: securePassword, mobile, batch })
    .then((data) => {
      res.send("user created successfully");
    })
    .catch((err) => {
      res.send(err);
    });
};

const loginUser = (req, res) => {
    const {email, password} = req.body
    // step 1 --> find the user
    UserModel.findOne({email})
    .then((user) => {
        console.log('user', user);
        // match the password
        const status = bcrypt.compareSync(password, user.password)
        console.log('status', status);
        const secretKey = 'Newton#june#2022'
        if(status){
            // send a JWT token
            const token = jwt.sign({
                id: user._id,
                email: user.email
            },secretKey);
            
            console.log('token', token);
            res.send('user logged in successfully')
        } else{
            res.send('password incorrect !!')
        }
    })
    .catch((err) => {
        res.send('user is not a valid user')
    })
}

const getProfile = (req, res) => {

    // res.send()
}

module.exports = { createUser, loginUser, getProfile };
