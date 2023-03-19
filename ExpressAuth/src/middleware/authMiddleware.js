const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");


const auth = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    const authData = authorization.split(" ");
    const token = authData[1];
    try {
      const userInfo = jwt.verify(token, process.env.SECRET_KEY);
      req.userId = userInfo.id;
      next();
    } catch (err) {
      console.log("inside error");
      res.send(err);
    }
  } else {
    res.json({
      err: 'you have to login first!!'
    });
  }
};

const roleBasedAuthrisation = (req, res, next) => {
    console.log('from roleBasedAuthrisation');

    UserModel.findById(req.userId)
    .then((user) => {
        console.log('user', user);
        if(user.role === 'admin'){
            next();
        }else{
            res.send('you are not authorised to view this')
        }
    })
    .catch((err) => {
        res.send(err)
    })
}




module.exports = { auth, roleBasedAuthrisation };
