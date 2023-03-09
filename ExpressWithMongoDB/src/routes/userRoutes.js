const express = require("express");
const {
  getAllUsers,
  createUser,
  getUserByEmail,
  getUserByAge,
  createMultiplePlayers,
  getPlayers,
  updatePlayer
} = require("../controllers/userController");

const router = express.Router();

// http://localhost:7500/user
router.get("/all", getAllUsers);
router.get("/", getUserByAge);
router.post("/", createUser);
// router.get("/:email", getUserByEmail);


// player routes
router.post('/player', createMultiplePlayers)
router.get('/player', getPlayers);
router.patch('/player/:id', updatePlayer);


module.exports = router;
