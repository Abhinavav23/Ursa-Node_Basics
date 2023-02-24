const express = require('express');

const app = express();

app.get('/cart', (req, res) => {
    console.log('/// endpoint');
    res.send('<h2>Default page using express</h2>');
})

app.get('/login', (req, res) => {
    console.log('login endpoint');
    res.send('<h1>login page...</h1>')
})

app.get('/data', (req, res) => {
    console.log('data endpoint');
    res.send({name: 'Abhinav'})
})

const PORT = 5500
app.listen(PORT, () => {
    console.log(`express server running at ${PORT}`);
})

// http://localhost:5500/cart
// http://localhost:5500/coments
// http://localhost:5500/cart