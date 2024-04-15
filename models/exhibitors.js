import mongoose from "mongoose";
const slotsSchema = new mongoose.Schema({
  time: { type: Date, required: true },
  status: { type: String, required: true },
  durationInMinutes: { type: String, required: true },
  visitorId: { type: Date },
  visitorName: { type: String },
});

const ExhibitorsSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    slots: { slotsSchema },
  },
  {
    collection: "exhibitors",
  }
);

export default mongoose.model("exhibitors", ExhibitorsSchema);
