const express = require("express");
const app = express();

const userRouter = require('./src/routes/userRoutes');
const productRouter = require('./src/routes/productRoute');

app.use(express.json());
// http://localhost/5800
app.use('/user', userRouter);
app.use('/product', productRouter);

require('./dbConnection')
// product
// app.get('/product', () => {

// })
// app.get('/product/clothing', () => {

// })



const PORT = 5800
app.listen(PORT, () => {
  console.log(`express server running on ${PORT}`);
});


