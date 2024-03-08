import express from "express";
import Room from "../models/Room.js";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoomById,
  updateRoom,
} from "../controllers/roomController.js";
const router = express.Router();
//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);
//UPDATE

router.put("/:id", verifyAdmin, updateRoom);

//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//GET
router.get("/:id", getRoomById);
//GET ALL
router.get("/", getAllRooms);

export default router;
