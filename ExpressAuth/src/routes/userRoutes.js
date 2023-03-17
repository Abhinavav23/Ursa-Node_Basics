const {Router} = require('express');
const { createUser, loginUser, getProfile } = require('../controllers/userController');

const router = Router()

router.post('/signup', createUser);
router.post('/login', loginUser);
router.get('/profile', getProfile)

module.exports = router
