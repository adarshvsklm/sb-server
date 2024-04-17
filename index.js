import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import logger from "morgan";
const app = express();
const db = mongoose.connection;
dotenv.config();

import slotsRouter from "./routes/slots.js";

import cookieParser from "cookie-parser";

try {
  mongoose.connect("mongodb://localhost:27017/Slot-Booking");

  db.on("error", console.error.bind(console, "connection error"));

  db.once("open", function () {
    console.log("Database Connected successfully");
  });
} catch (err) {
  console.log(err);
}
app.use(logger("dev"));
var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
// app.use(cors({ credentials: true, origin: true }));
app.options(cors({ origin: true, credentials: true }));

app.use(cookieParser());
app.use(express.json());
app.use("/slotBooking", slotsRouter);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  console.log(errorMessage, "error message");
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
