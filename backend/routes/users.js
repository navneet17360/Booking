import express from "express";
import User from "../models/User.js";
import { createError } from "../utils/error.js";
import {
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.status(200).json("hello,you are logged in");
// });
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res
//     .status(200)
//     .json("hello user,you are logged in and you can delete your account");
// });
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res
//     .status(200)
//     .json("hello user,you are logged in and you can delete all account");
// });

// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET
router.get("/:id", verifyUser, getUserById);

// GET ALL
router.get("/", verifyAdmin, getAllUsers);

export default router;
