const express = require("express");
const { getAllUsers } = require("../controllers/userController");

const router = express.Router();

// http://localhost:7500/user
router.get("/all", getAllUsers);

module.exports = router;
