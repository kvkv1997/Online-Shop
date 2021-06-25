const mongoose = require("mongoose");
const Product = require("../models/Product");

class ProductController {
  // create new product
  createProduct(req, res) {
    const product = new Product({
      _id: mongoose.Types.ObjectId(),
      name: req.body.name,
      price: req.body.price,
      image: req.body.image,
      amount: req.body.amount,
    });
    return product
      .save()
      .then((newProduct) => {
        return res.status(201).json({
          success: true,
          message: "New cause created successfully",
          Product: newProduct,
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          success: false,
          message: "Server error. Please try again.",
          error: error.message,
        });
      });
  }
  // get all products
  getAllProduct(req, res) {
    Product.find()
      .select("_id name price image amount")
      .then((allProduct) => {
        return res.status(200).json({
          success: true,
          message: "A list of all product",
          Product: allProduct,
        });
      })
      .catch((error) => {
        res.status(500).json({
          success: false,
          message: "Server error. Please try again.",
          error: err.message,
        });
      });
  }
}
module.exports = new ProductController();
