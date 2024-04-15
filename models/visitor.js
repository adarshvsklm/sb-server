import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

const bookingSchema = new mongoose.Schema({
  exhibitorId: { type: String, required: true },
  exhibitorCompanyName: { type: String, required: true },
  status: { type: String, required: true },
  time: { type: Date, required: true },
});

const Visitor = new mongoose.Schema(
  {
    name: { type: String, required: true },
    bookings: { bookingSchema },
  },
  {
    collection: "visitors",
  }
);

export default mongoose.model("visitors", Visitor);
