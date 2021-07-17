const express = require("express");
const router = express.Router();

const productController = require("../controllers/ProductController");

router.post("/create-product", productController.createProduct);
router.get("/", productController.getAllProduct);
router.patch("/:productId", productController.updateProduct);
router.delete("/:productId", productController.deteleProduct);

module.exports = router;
