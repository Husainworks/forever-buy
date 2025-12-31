import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// MIDDLEWARES ---------------------------------------------------------------------
// Middleware to handle CORS
app.use(cors());
// Middleware to handle parsing data from the body
app.use(express.json());

// Connect to database ---------------------------------------------------------------------
connectDB().then(() => console.log("MongoDB connected successfully"));
connectCloudinary().then(() =>
  console.log("Cloudinary connected successfully")
);

// API Routes
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
