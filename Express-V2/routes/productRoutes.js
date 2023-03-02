const express = require('express');

const router = express.Router();

const products = [
    {
      id: 1,
      name: "iphone 13",
      category: "Mobile",
      price: 50000,
      color: "black",
    },
    {
      id: 2,
      name: "galaxy",
      category: "Mobile",
      price: 20000,
      color: "white",
    },
    {
      id: 3,
      name: "fridge",
      category: "appliances",
      price: 20000,
      color: "green",
    },
    {
      id: 4,
      name: "cooler",
      category: "appliances",
      price: 25000,
      color: "gray",
    },
  ];
// http://localhost/8000/product/

// router.get('/', (req, res) => {
//     res.send(products)
// })
// router.post('/', (req, res) => {
//     products.push(req.body)
//     res.send(products)
// })

router.route('/')
.get((req, res) => {
    res.send(products)
})
.post((req, res) => {
    console.log('req.body', req.body);
    products.push(req.body)
    res.send(products)
})

router.get('/mobile', (req, res) => {
    res.send('all mobile product list');
})

router.get('/cloth', (req, res) => {
    res.send('cloths list');
})

module.exports = router

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