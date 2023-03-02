const express = require("express");

const app = express();

// to get the data from client where body is in form of json
app.use(express.json());

// to get the data from a form which will have the format as urlencoded
// app.use(express.urlencoded());

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

app.post("/", (req, res) => {
  console.log("post endpoint");
  res.send("<h2>Default page POST</h2>");
});

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
  const productItem = product.find(
    (prd) => prd.id === Number(req.params.productId)
  );
  console.log("productItem", productItem);
  if (productItem) {
    res.send(productItem);
  } else {
    res.send({});
  }
});

app.get("/products", (req, res) => {
  console.log("query", req.query);
  const { category, price } = req.query;
  console.log("category", category);
  console.log("price", price);

  if (category) {
    const productList = product.filter((prd) => prd.category === category);
    res.send(productList);
  }
  if (price) {
    const productList = product.filter((prd) => prd.price === Number(price));
    res.send(productList);
  }
  // refactor this logic
  res.send(product);
});

app.post("/products", (req, res) => {
  console.log("data in body", req.body);
  // data wont be persisted as we are storing the data in a variable
  product.push(req.body);
  res.send(product);
});

// put and patch are update operations
// put --> which we use to update the whole data by replacing the whole content
// put will create a new data or element if the updating element not found

app.put("/products/:id", (req, res) => {
  console.log("params in put req", req.params);
  console.log("updates value", req.body);
  // product.forEach((el, index) => {
  //     if(el.id === Number(req.params.id)){
  //         product[index] = req.body
  //     }
  // })

  // find index of the element
  const elementIndex = product.findIndex(
    (el) => el.id === Number(req.params.id)
  );
  // update the element at that index
  product[elementIndex] = req.body;
  res.send(product);
});

// patch --> updates the only value passed in request data
app.patch("/products/:id", (req, res) => {
  console.log("params in put req", req.params);
  console.log("updates value", req.body);
  // find the index of element
  const elementIndex = product.findIndex(
    (el) => el.id === Number(req.params.id)
  );
  // update the only key in the element
  if (elementIndex !== -1)
    product[elementIndex] = { ...product[elementIndex], ...req.body };
  res.send(product);
});

app.delete("/products/:id", (req, res) => {
  console.log("params in delete req", req.params);
  // find the element using req.params and delete it
  const elementIndex = product.findIndex(
    (el) => el.id === Number(req.params.id)
  );
  if (elementIndex !== -1) product.splice(elementIndex, 1);
  res.send(product);
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

{
  /* <form action="https://myapi.com" method="POST">
    <input name="username"/>
    <input name="password"/>
    <input type="submit"/>
</form>

{
    username: 'abhinav',
    password: '12345'
} */
}

// fetch("https://myapi.com", {
//     method: "post",
//     body: JSON.stringify()
// })
// .then((resp) => {
//     return resp.json()
// })


// assignments
// app.post("/divide", (req, res) => {
//   const { num1, num2 } = req.body;
//   // check the types of num1 and num2
//   // send response accordingly

//   // check if the values of num1 and num2 are more than 10 lakhs
//   // or value of sum is more than 10 lakhs
//   // message should be "overflow"

//   // check if the values of num1 and num2 are less than 10 lakhs
//   // or value of res is less than 10 lakhs
//   // message should be "underflow"

//   if (num2 === 0) {
//     res.send({
//       status: "error",
//       message: "Cannot divide by zero",
//     });
//   } else {
//     res.send({
//       status: "success",
//       message: "The division of given numbers",
//       result: num1 / num2,
//     });
//   }
// });
