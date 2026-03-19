const axios = require("axios");

exports.getAllProducts = async (req, res) => {
  const response = await axios.get("https://fakestoreapi.com/products");

  res.render("home", { products: response.data });
};