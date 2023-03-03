const express = require('express');

const app = express();

const dotEnv = require('dotenv');
dotEnv.config();
app.use(express.json());

const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');

const {checkLogInStatus, checkUser} = require('./middleware');

app.use('/product', productRouter);
app.use('/', userRouter);

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

app.get('/profile',checkLogInStatus, (req, res) => {
    console.log('inside profile route');
    res.send('profile page')
})

app.get('/orders',checkLogInStatus, (req, res) => {
    console.log('inside orders route');
    res.send('orders page')
})


const PORT = process.env.PORT || 5800
// console.log(process);

app.listen(PORT, () => {
    console.log(`app running on ${PORT}`);
})
