const {
  getProductData,
  addProductsInData,
  updateProductsInData,
} = require("../models/productModel");

const getAllProducts = (req, res) => {
  const productList = getProductData();
  res.send(productList);
};

const createProduct = (req, res) => {
  console.log("req.body", req.body);
  const status = addProductsInData(req.body);
  if (status) {
    res.send("product created successfully!!");
  } else {
    res.send("something went wrong!!");
  }
};

const updateProduct = (req, res) => {
  console.log("params in updateProduct", req.params);
  const { id } = req.params;
  const status = updateProductsInData(id, req.body);
  if (status) {
    res.send("product updated successfully!!");
  } else {
    res.send("something went wrong!!");
  }
};

const deleteProduct = (req, res) => {};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
