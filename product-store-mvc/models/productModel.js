const fetch = require("node-fetch");

exports.fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  return data;
};

exports.fetchSingleProduct = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();

  return data;
};