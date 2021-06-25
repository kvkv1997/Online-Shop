const express = require("express");
const router = express.Router();

const productController = require("../controllers/ProductController");

router.post("/create-product", productController.createProduct);
router.get("/", productController.getAllProduct);
module.exports = router;
