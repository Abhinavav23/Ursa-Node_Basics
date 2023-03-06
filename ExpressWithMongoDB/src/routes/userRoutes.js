const express = require("express");
const {
  getAllUsers,
  createUser,
  getUserByEmail,
  getUserByAge
} = require("../controllers/userController");

const router = express.Router();

// http://localhost:7500/user
router.get("/all", getAllUsers);
router.get("/", getUserByAge);
router.post("/", createUser);
router.get("/:email", getUserByEmail);


module.exports = router;
