const express = require("express");
const {
  getUserList,
  createUser,
  getUserAddress,
  getUserOrders,
  getUser,
} = require("../controllers/userController");

const router = express.Router();

// http://localhost/5800/user
router.get("/", getUserList); //reading user list
router.get('/singleUser', getUser)
router.post("/", createUser);
router.get("/address", getUserAddress);
router.get("/orders", getUserOrders);

module.exports = router;

// module.exports = {
//     a: 10,
//     b:20
// }
