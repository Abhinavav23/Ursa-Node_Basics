const UserModel = require("../models/userModel");

const getUserList = (req, res) => {
  // res.send("user List");
  UserModel.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getUser = (req, res) => {
  // always return you a list
  // console.log('query params', req.query);
  // UserModel.find({age: Number(req.query.age)})
  // .then((data) => {
  //   res.send(data)
  // })

  // UserModel.find({email: 'Student4@mail'})
  // .then((data) => {
  //   res.send(data)
  // })

  // returns the first match
  // UserModel.findOne({age: 25, name: 'Student6'})
  // .then((data) => {
  //   res.send(data)
  // })

  // UserModel.findById('640e05a68e3198828b369647')
  // .then((data) => {
  //     res.send(data)
  // })

  // UserModel.find().select({name:0})
  // UserModel.find().select(['-name'])
  // UserModel.find().select('name')
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  // UserModel
  // .find({age: 25})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  // >, <, >=, <=, !=, =, filter based on multiple values

  // UserModel
  // .find({age: {$gte: 25}})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  // UserModel
  // .find({age: {$lte: 25}})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  // UserModel
  // .find({age: {$in: [25, 18]}})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  // UserModel
  // .find({age: {$nin: [25, 18]}})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  // UserModel
  // .find({age: {$ne: 25}})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  // and, or, nor, nand

  // UserModel
  // .find({$and: [{age: 25}, {name: 'Student6'}]})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  // UserModel
  // .find({$nor: [{age: 25}, {name: 'Student1'}]})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  // UserModel
  // .find({$nor: [{age: 25}, {name: 'Student1'}]})
  // .countDocuments()
  // // UserModel.find().select({email:1})
  // .then((number) => {
  //   res.send({count: number})
  // })

  // UserModel
  // .find({$nor: [{age: 25}, {name: 'Student1'}]})
  // .select({name:1, age:1})
  // .limit(5)
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  UserModel.find({ $nor: [{ age: 25 }, { name: "Student1" }] })
    .select({ name: 1, age: 1 })
    .skip(3)
    // UserModel.find().select({email:1})
    .then((data) => {
      res.send(data);
    });
};

const createUser = (req, res) => {
  // get the data coming from client
  console.log("user data", req.body);
  // UserModel.create(req.body)
  //   .then((data) => {
  //     console.log("data", data);
  //     res.send(data);
  //   })
  //   .catch((err) => {
  //     res.send(err);
  //   });

  UserModel.insertMany(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });

  // we have to create a user using this data in our DB
};

const getUserAddress = (req, res) => {
  res.send("address of user");
};

const getUserOrders = (req, res) => {
  res.send("user orders");
};

const updateUser = (req, res) => {
  console.log("params", req.params);

  // UserModel.findByIdAndUpdate(
  //   req.params.id,
  //   { $set: req.body },
  //   { new: true } // used for getting updated data
  // ).then((data) => {
  //   console.log("data", data);
  //   res.send(data);
  // });

  // UserModel.updateOne({ email: req.params.email }, req.body, {
  //   upsert: true, // it will create the data if not found
  // }).then((data) => {
  //   console.log("data", data);
  //   res.send(data);
  // });

  UserModel.updateMany({ password: "12345" }, req.body).then((data) => {
    console.log(data);
    res.send(data);
  });
};

module.exports = {
  getUserList,
  createUser,
  getUserAddress,
  getUserOrders,
  getUser,
  updateUser,
};
