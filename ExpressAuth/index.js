const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
dotenv.config();
const app = express();
require("./connectDb");
app.use(express.json());

// to solve cors issues
app.use(cors());

app.use(express.static('./src/views'));

app.set('view engine', 'pug');

app.set('views', './src/views');

const userRouter = require("./src/routes/userRoutes");
const productRouter = require("./src/routes/productRoute");

app.use("/user", userRouter);
app.use("/product", productRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`auth server running at ${PORT}`);
});
