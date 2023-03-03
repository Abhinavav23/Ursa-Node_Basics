const express = require("express");

const router = express.Router();

const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// http://localhost/8000/product/

// router.get('/', (req, res) => {
//     res.send(products)
// })
// router.post('/', (req, res) => {
//     products.push(req.body)
//     res.send(products)
// })

router.route("/").get(getAllProducts).post(createProduct);

router.route("/:id").patch(updateProduct).delete(deleteProduct);

// router.get('/mobile', (req, res) => {
//     res.send('all mobile product list');
// })

// router.get('/cloth', (req, res) => {
//     res.send('cloths list');
// })

module.exports = router;

// const a = 10
// const b =20
// const name = 'Abhinav'

// const info  = {
//     name: 'Abhinav',
// }

// using Routes
// product route
// app.route('/product/:id')
// .get((req, res) => {
//     res.send('product page-- GET')
// })
// .post((req, res) => {
//     res.send('product page -- POST')
// })
// .patch((req, res) => {
//     res.send('product page -- PATCH')
// })
