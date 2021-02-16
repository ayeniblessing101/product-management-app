const express = require("express");

const di = require("../../di-container");

const uploads = require("../middleware/multerConfig");

const ProductController = require("../controllers/productController");
const auth = require("../middleware/auth");

const productController = new ProductController(di);

const productRouter = new express.Router();

const { createProduct, getProducts } = productController;

productRouter.post("/products", auth, uploads.single("image"), createProduct);
productRouter.get("/products", auth, getProducts);

module.exports = productRouter;
