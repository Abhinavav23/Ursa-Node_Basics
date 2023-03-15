const express = require('express');
const { getProducts, createProduct } = require('../controllers/productController');

const router = express.Router()

router.get('/', getProducts);
router.post('/', createProduct);

module.exports = router