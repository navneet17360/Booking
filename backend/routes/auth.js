//its better to seperate this file ,in this jwt cookies will be used
import express from "express";
import { login, register } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
export default router;
