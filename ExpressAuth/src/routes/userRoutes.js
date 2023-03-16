const {Router} = require('express');
const { createUser } = require('../controllers/userController');

const router = Router()

router.post('/', createUser)

module.exports = router
