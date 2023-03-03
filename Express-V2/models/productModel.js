const fs = require("fs");

const readAndParseDataFromFile = () => {
  // read file
  const data = fs.readFileSync("./data/products.json");
  //   convert to javascript obj to operate on
  const products = JSON.parse(data);
  return products;
};

const writeDataInFile = (productObj) => {
  try {
    fs.writeFileSync("./data/products.json", JSON.stringify(productObj, "", 3));
    return true;
  } catch (e) {
    console.log(e.message);
    return false;
  }
};

const getProductData = () => {
  const { productList } = readAndParseDataFromFile();
  return productList;
};

const addProductsInData = (product) => {
  // read file and parse data
  const productObj = readAndParseDataFromFile();
  console.log("product from file", productObj);
  // add the product in the array

  // const updatedProductList = [...product.productList, prd]
  // product.productList = updatedProductList

  productObj.productList.push(product);
  // save the array in the file again
  return writeDataInFile(productObj);
};

const updateProductsInData = (id, updateData) => {
  const productObj = readAndParseDataFromFile();
  // const {productList:productArr } = productObj
  // const productIndex = productArr.findIndex((el) => el.id === Number(id));
  // if (productIndex !== -1) {
  //     productArr[productIndex] = { ...productArr[productIndex], ...updateData};
  // }
    //   productObj.productList = productArr;

  const index = productObj.productList.findIndex((el) => el.id === Number(id));
  productObj.productList[index] = {
    ...productObj.productList[index],
    ...updateData,
  };
  return writeDataInFile(productObj);
};

module.exports = { getProductData, addProductsInData, updateProductsInData };
