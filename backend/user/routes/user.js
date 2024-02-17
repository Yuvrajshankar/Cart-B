import express from "express";
import { addToCart, buyNow, getAllProducts, getOneProduct, removeFromCart } from "../controllers/user.js";
import { jwtVerify } from "../token/verifyToken.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:productId", getOneProduct);
router.post("/cart/add/:productId", jwtVerify, addToCart);
router.post("/cart/remove/:productId", jwtVerify, removeFromCart);
router.post("/buy/:productId", jwtVerify, buyNow);

export default router;