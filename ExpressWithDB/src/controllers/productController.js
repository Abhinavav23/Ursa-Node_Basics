const ProductModel = require('../models/productModel')

const getProducts = (req, res) => {
    ProductModel.find()
    .then((data) => {
        res.send(data)
    })
}

const createProduct = (req, res) => {
    ProductModel.create(req.body)
    .then((data) => {
        // console.log('data', data);
        res.send('product created successfully');
    })
    .catch((err) => {
        res.send(err);
    })
}

module.exports = {getProducts, createProduct}