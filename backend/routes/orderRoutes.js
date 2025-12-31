import express from "express";
import { adminAuth } from "../middleware/adminAuth.js";
import {
  allOrderData,
  placeOrder,
  placeOrderRazorpay,
  updateOrderStatus,
  userOrderData,
  verifyRazorpay,
} from "../controller/orderController.js";
import { authUser } from "../middleware/cartAuth.js";

const orderRouter = express.Router();

// Admin features
orderRouter.post("/list-all-orders", adminAuth, allOrderData);
orderRouter.post("/update-order-status", adminAuth, updateOrderStatus);

// Payment Features
orderRouter.post("/place-cod", authUser, placeOrder);
orderRouter.post("/place-razorpay", authUser, placeOrderRazorpay);

// User Feature
orderRouter.post("/all-user-orders", authUser, userOrderData);

// Verify Payment
orderRouter.post("/verify-razorpay", authUser, verifyRazorpay);

export default orderRouter;
