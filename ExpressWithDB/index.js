const express = require("express");
const {getUserList} = require("./src/controllers/userController");

const app = express();

// http://localhost/5800

app.get('/user', getUserList)


const PORT = 5800
app.listen(PORT, () => {
  console.log(`express server running on ${PORT}`);
});


