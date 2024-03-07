import express from "express";
import User from "../models/User.js";
import { createError } from "../utils/error.js";
import {
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();
router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send(200).json("hello ,you are logged in");
});

// UPDATE
router.put("/:id", updateUser);

// DELETE
router.delete("/:id", deleteUser);

// GET
router.get("/:id", getUserById);

// GET ALL
router.get("/", getAllUsers);

export default router;
