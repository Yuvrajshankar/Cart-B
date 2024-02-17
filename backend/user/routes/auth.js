import express from "express";
import { alreadyUser, getUserData, login, logout, register, update } from "../controllers/auth.js";
import { jwtVerify } from "../token/verifyToken.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.patch("/update", jwtVerify, update);
router.post("/logout", jwtVerify, logout);
router.get("/user-data", jwtVerify, getUserData);
router.get("/checkUser", jwtVerify, alreadyUser);

export default router;