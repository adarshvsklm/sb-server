import cors from "cors";
import express from "express";
import {
  bookSlot,
  changeStatus,
  getExhibitionDate,
  getVisitorsList,
  listBookedSlots,
  listExhibitors,
  listSlots,
} from "../controller/slots.js";
import { headers } from "../cors.js";

let router = express.Router();

router.get("/list-exhibitors", cors(), headers, listExhibitors);
router.get("/list-slots", cors(), headers, listSlots);
router.post("/book-slot", cors(), headers, bookSlot);
router.get("/list-booked-slots", cors(), headers, listBookedSlots);
router.get("/get-exhibitionDate", cors(), headers, getExhibitionDate);
router.get("/get-visitor-list", cors(), headers, getVisitorsList);
router.post("/change-status", cors(), headers, changeStatus);
export default router;
