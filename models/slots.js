import mongoose from "mongoose";

const singleSlotsSchema = new mongoose.Schema(
  {
    time: { type: Date },
    status: { type: String, required: true },
    durationInMinutes: { type: Number, required: true },
    visitorId: { type: String },
    visitorName: { type: String },
    bookedTimeZone: { type: String },
    slotId: { type: String },
  },
  {
    timestamps: true,
  }
);

const dateSchema = new mongoose.Schema({
  to: { type: Date, required: true },
  from: { type: Date, required: true },
  durationInMinutes: { type: String, required: true },
  slots: [singleSlotsSchema],
});

const SlotsSchema = new mongoose.Schema(
  {
    eid: { type: String, required: true },
    companyName: { type: String, required: true },
    dates: [dateSchema],
  },
  {
    collection: "slots",
  }
);

export default mongoose.model("slots", SlotsSchema);
