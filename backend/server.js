import "dotenv/config";
import express from "express";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
// import products from "./data/products.js";
import productRoutes from "./routes/productRoutes.js";
const port = process.env.PORT || 5000;
import cors from "cors";

connectDB();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
