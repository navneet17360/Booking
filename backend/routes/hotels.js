import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotelById,
  updateHotel,
} from "../controllers/hotelController.js";

const router = express.Router();

//CREATE
router.post("/", createHotel);
//UPDATE

router.put("/:id", updateHotel);

//DELETE
router.delete("/:id", deleteHotel);
//GET
router.get("/:id", getHotelById);
//GET ALL
router.get(
  "/",
  getAllHotels
  // const failed = true;

  // if (failed) {
  //   return next(createError(401, "you are not authenticated"));
  // }
);

export default router;
