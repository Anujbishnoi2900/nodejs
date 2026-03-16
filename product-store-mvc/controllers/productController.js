const productModel = require("../models/productModel");

exports.getProducts = async (req, res) => {
  const products = await productModel.fetchProducts();

  res.render("index", {
    products: products
  });
};

exports.getSingleProduct = async (req, res) => {
  const id = req.params.id;

  const product = await productModel.fetchSingleProduct(id);

  res.render("product", {
    product: product
  });
};