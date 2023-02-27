const express = require("express");

const app = express();

const product = [
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

app.get("/", (req, res) => {
  console.log("get endpoint");
  res.send("<h2>Default page GET</h2>");
});

app.post("/", (req, res) =>{
    console.log("post endpoint");
    res.send("<h2>Default page POST</h2>");
})

app.get("/login", (req, res) => {
  console.log("method", req.method);
  console.log("url", req.url);
  console.log("path", req.path);
  console.log("headers", req.headers);
  console.log("query", req.query);
  console.log(req);
  res.send("<h1>login page..</h1>");
});

app.get("/data", (req, res) => {
  console.log("data endpoint");
  res.send({ name: "Abhinav" });
});

app.get("/products/:productId", (req, res) => {
  console.log("params", req.params);
  const productItem = product.find((prd) => prd.id === Number(req.params.productId));
    console.log('productItem', productItem);
    if(productItem){
        res.send(productItem)
    }else{
        res.send({})
    }
});

app.get("/products", (req, res) => {
    console.log('query', req.query);
    const {category, price} = req.query;
    console.log('category', category);
    console.log('price', price);

    if(category){
        const productList = product.filter((prd) => prd.category === category);
        res.send(productList);
    }
    if(price){
        const productList = product.filter((prd) => prd.price === Number(price));
        res.send(productList);
    }
});

app.get("*", (req, res) => {
  console.log("not found page");
  res.send("<h3>Page Not Found !!</h3>");
});

const PORT = 5500;


app.listen(PORT, () => {
  console.log(`express server running at ${PORT}`);
});

// http://localhost:5500/cart
// http://localhost:5500/coments
// http://localhost:5500/cart



// try this
// http://localhost:5500/products?price=20000&category=mobile
// result should be 
// {id: 2,
//     name: "galaxy",
//     category: "Mobile",
//     price: 20000,
//     color: "white
// }

// http://localhost:5500/products
// should return all products


// const userInfo = {
//     username: 'abhinav',
//     password: '12345'
// }

// fetch('https://myapi.com', {
//     method: POST,
//     body: JSON.stringify(userInfo),
// })

// axios.post('https://myapi.com', userInfo)