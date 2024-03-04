//its better to seperate this file ,in this jwt cookies will be used
import express from "express";

const router = express.Router();
router.get("/", (req, res) => {
  res.send("Hi,This is auth endpoint");
});

router.get("/register", (req, res) => {
  res.send("Hi,this is register endpoint");
});
export default router;
