const {Router} = require('express');
const { createUser, loginUser, getProfile, getBatchName, getAllUsers } = require('../controllers/userController');
const { auth, roleBasedAuthrisation } = require('../middleware/authMiddleware');

const router = Router()

router.post('/signup', createUser);
router.post('/login', loginUser);
router.get('/profile',auth, getProfile);
router.get('/batch', auth, getBatchName);
router.get('/allusers', auth, roleBasedAuthrisation, getAllUsers)

module.exports = router
