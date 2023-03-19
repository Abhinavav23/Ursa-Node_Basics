const {Router} = require('express');
const { getProducts, getCart } = require('../controllers/productController');

const router = Router();

router.get('/', getProducts);
router.get('/cart', getCart);

module.exports = router
