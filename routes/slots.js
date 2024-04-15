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
let router = express.Router();

router.get("/list-exhibitors", listExhibitors);
router.get("/list-slots", listSlots);
router.post("/book-slot", bookSlot);
router.get("/list-booked-slots", listBookedSlots);
router.get("/get-exhibitionDate", getExhibitionDate);
router.get("/get-visitor-list", getVisitorsList);
router.post("/change-status", changeStatus);
export default router;
