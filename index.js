import cors from "cors";
import express from "express";
import mongoose from "mongoose";
const app = express();
const db = mongoose.connection;

import slotsRouter from "./routes/slots.js";

import cookieParser from "cookie-parser";

try {
  mongoose.connect("mongodb://localhost:27017/Slot-Booking");

  db.on("error", console.error.bind(console, "connection error"));

  db.once("open", function () {
    console.log("Connected successfully");
  });
} catch (err) {
  console.log(err);
}

app.use(cors({ credentials: true, origin: true }));
// app.options('*', cors({origin: true, credentials:true}));

app.use(express.json());
app.use(cookieParser());

app.use("/", slotsRouter);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
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
