import express from "express";
import { getUserData, login, logout, register, update } from "../Controllers/auth.js";
import { verifyToken } from "../token/verifyToken.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.patch("/update", verifyToken, update);
router.post("/logout", verifyToken, logout);
router.get("/user-data", verifyToken, getUserData);

export default router;