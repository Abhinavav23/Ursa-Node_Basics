const express = require('express');

const app = express();

const dotEnv = require('dotenv');
dotEnv.config();

const {checkLogInStatus, checkUser} = require('./middleware')

// app.use(checkUser);
// app.use(checkLogInStatus);
// express.static --> middleware to serve static files


// app.get('/product', (req, res) => {
//     res.send('product page-- GET')
// })

// app.post('/product', (req, res) => {
//     res.send('product page -- POST')
// })

// app.patch('/product', (req, res) => {
//     res.send('product page -- PATCH')
// })



// using Routes
// product route
app.route('/product/:id')
.get((req, res) => {
    res.send('product page-- GET')
})
.post((req, res) => {
    res.send('product page -- POST')
})
.patch((req, res) => {
    res.send('product page -- PATCH')
})



// user route
app.route('/user/:id')
.get((req, res) => {
    res.send('product page-- GET')
})
.post((req, res) => {
    res.send('product page -- POST')
})
.patch((req, res) => {
    res.send('product page -- PATCH')
})









app.get('/profile',checkLogInStatus, (req, res) => {
    console.log('inside profile route');
    res.send('profile page')
})

app.get('/orders',checkLogInStatus, (req, res) => {
    console.log('inside orders route');
    res.send('orders page')
})


const PORT = process.env.PORT || 5800
console.log(process);


app.listen(PORT, () => {
    console.log(`app running on ${PORT}`);
})
