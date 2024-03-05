//its better to seperate this file ,in this jwt cookies will be used
import express from "express";
import { register } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
export default router;
