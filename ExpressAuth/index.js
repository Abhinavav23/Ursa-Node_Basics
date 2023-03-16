const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
require("./connectDb");
app.use(express.json());

const userRouter = require("./src/routes/userRoutes");

app.use("/user", userRouter);
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`auth server running at ${PORT}`);
});
