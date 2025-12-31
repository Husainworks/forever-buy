import express from "express";
import {
  addProduct,
  deleteProduct,
  listAllProducts,
  viewProduct,
} from "../controller/productController.js";
import upload from "../middleware/multer.js";
import { adminAuth } from "../middleware/adminAuth.js";

const productRouter = express.Router();

productRouter.post(
  "/add-product",
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);
productRouter.get("/all-products", listAllProducts);
productRouter.delete("/remove-product/:id", adminAuth, deleteProduct);
productRouter.get("/:id", viewProduct);

export default productRouter;
