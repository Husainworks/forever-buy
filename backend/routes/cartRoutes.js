import express from "express";
import {
  addToCart,
  getCartData,
  updateCart,
} from "../controller/cartController.js";
import { authUser } from "../middleware/cartAuth.js";

const cartRouter = express.Router();

cartRouter.post("/get", authUser, getCartData);
cartRouter.post("/add", authUser, addToCart);
cartRouter.post("/update-cart", authUser, updateCart);

export default cartRouter;
