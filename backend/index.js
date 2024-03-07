import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
//if you are importing libraries you dont need to write extension but if you are using file you have to write extension of file
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

import cookieParser from "cookie-parser";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected To MongoDB");
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB Disconnected");
});

//middlewares
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);

app.use("/api/hotels", hotelsRoute);

app.use("/api/users", usersRoute);
app.use("/api/rooms", roomsRoute);

app.listen(5000, () => {
  connect();
  console.log("Connected To Backend");
});

app.use((err, req, res, next) => {
  //its a specific middleware used for error handling and has to be in this order
  const errStatus = err.status || 500;
  const errMessage = err.message || "something went wrong";
  return res.status(500).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: err.stack,
  }); //this will be sent to the client
});
