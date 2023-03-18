const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = (req, res) => {
  console.log("body", req.body);
  const { name, email, password, mobile, batch, role } = req.body;

  const saltRounds = bcrypt.genSaltSync(10);
  const securePassword = bcrypt.hashSync(password, saltRounds);
  console.log("securePassword", securePassword);

  UserModel.create({
    name,
    email,
    password: securePassword,
    mobile,
    batch,
    role,
  })
    .then((data) => {
      res.send("user created successfully");
    })
    .catch((err) => {
      res.send(err);
    });
};

const loginUser = (req, res) => {
  const { email, password } = req.body;
  // step 1 --> find the user
  UserModel.findOne({ email })
    .then((user) => {
      console.log("user", user);
      // match the password
      const status = bcrypt.compareSync(password, user.password);
      console.log("status", status);
      if (status) {
        // send a JWT token
        const token = jwt.sign(
          {
            id: user._id,
            email: user.email,
          },
          process.env.SECRET_KEY
        );

        console.log("token", token);

        // saving the token in db
        // updateOne query

        res.json({
          message: "login successful",
          token,
        });
      } else {
        res.send("password incorrect !!");
      }
    })
    .catch((err) => {
      res.send("user is not a valid user");
    });
};

const getProfile = (req, res) => {
  //   console.log("headers", req.headers);
  console.log("id", req.userId);
  UserModel
  .findById(req.userId)
  .select({ password: 0, _id: 0 })
  .then((userData) => {
    res.send(userData)
  })
  .catch(() => {
    res.send("something went wrong!!");
  })
};

const getBatchName = (req, res) => {
    UserModel
    .findById(req.userId)
    .select({ batch: 1 })
    .then((userData) => {
      res.send(userData)
    })
    .catch(() => {
      res.send("something went wrong!!");
    })
};

const getAllUsers = (req, res) => {
  console.log("id", req.userId);
  UserModel.find().select({name: 1})
  .then((userList) => {
    res.send(userList)
  })
  .catch((err) => {
    res.send(err)
  })
};

module.exports = {
  createUser,
  loginUser,
  getProfile,
  getBatchName,
  getAllUsers,
};
