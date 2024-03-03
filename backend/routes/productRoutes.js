import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";

// Get all Product
router.route("/").get(getProducts);

// Get individual product by id
router.route("/:id").get(getProductById);

export default router;
