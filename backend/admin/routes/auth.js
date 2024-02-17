import express from "express";
import { alreadyAdmin, getUserData, login, logout, register, update } from "../controllers/auth.js";
import { verifyToken } from "../token/verifyToken.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.patch("/update", verifyToken, update);
router.post("/logout", verifyToken, logout);
router.get("/user-data", verifyToken, getUserData);
router.get("/checkAdmin", verifyToken, alreadyAdmin);

export default router;