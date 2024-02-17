import express from "express";
import { verifyToken } from "../token/verifyToken.js";
import { allProduct, createProduct, deleteProduct, oneProduct, updateProduct } from "../controllers/product.js";

const router = express.Router();

router.post("/create", verifyToken, createProduct);
router.patch("/update/:id", verifyToken, updateProduct);
router.delete("/delete/:id", verifyToken, deleteProduct);
router.get("/", verifyToken, allProduct);
router.get("/:id", verifyToken, oneProduct);

export default router;