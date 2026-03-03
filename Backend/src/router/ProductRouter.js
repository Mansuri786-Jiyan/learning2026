const express = require("express");
const router = express.Router();

const { getAllproduct } = require("../controller/ProductController.js");
const { getProductbyId } = require("../controller/ProductController.js");
const { createProduct } = require("../controller/ProductController.js");
const { addProduct } = require("../controller/ProductController.js");

router.get("/products", getAllproduct);
router.post("/products/create", createProduct);
router.get("/products/:id", getProductbyId);
router.post("/products/addpro", addProduct);

module.exports = router;