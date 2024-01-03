import express from "express";
import { getUserData, login, logout, register, update } from "../Controllers/auth.js";
import { jwtVerify } from "../Token/verifyToken.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.patch("/update", jwtVerify, update);
router.post("/logout", jwtVerify, logout);
router.get("/user-data", jwtVerify, getUserData);

export default router;