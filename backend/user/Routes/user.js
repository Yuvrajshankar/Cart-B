import express from "express";
import { addToCart, getAllProducts, getOneProduct, removeFromCart } from "../Controllers/user.js";
import { jwtVerify } from "../Token/verifyToken.js";


const router = express.Router();

router.get("/", getAllProducts);
router.get("/:productId", getOneProduct);
router.post("/cart/add/:productId", jwtVerify, addToCart);
router.post("/cart/remove/:productId", jwtVerify, removeFromCart);

export default router;