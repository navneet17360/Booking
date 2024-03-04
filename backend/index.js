import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
//if you are importing libraries you dont need to write extension but if you are using file you have to write extension of file
import authRoute from "./routes/auth.js";
// import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
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
app.use(express.json());
app.use("/api/auth", authRoute);
// app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
// app.use("/api/rooms", roomsRoute);

app.listen(5000, () => {
  connect();
  console.log("Connected To Backend");
});
