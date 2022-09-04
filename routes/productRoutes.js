const express = require("express");

const productController = require("./../controllers/productController");
const productRouter = express.Router();
//routes
productRouter
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.addProduct);
productRouter.route("/:id").get(productController.getProductById);
productRouter.route("/:id").put(productController.putProducts);
productRouter.route("/:id").delete(productController.deleteProducts);
module.exports = productRouter;
