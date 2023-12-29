import express from "express";
import { allProduct, deleteProduct, oneProduct, updateProduct } from "../Controllers/product.js";
import { verifyToken } from "../token/verifyToken.js";

const router = express.Router();

// router.post("/create", verifyToken, createProduct);
router.patch("/update/:id", verifyToken, updateProduct);
router.delete("/delete/:id", verifyToken, deleteProduct);
// router.post("/products", verifyToken, adminProduct);
router.get("/", verifyToken, allProduct);
router.get("/:id", verifyToken, oneProduct);

export default router;