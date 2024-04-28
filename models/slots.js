import mongoose from "mongoose";

// name: "$dates.slots.visitorName",
// visitorId: "$dates.slots.visitorId",
// bookedTimeZone: "$dates.slots.bookedTimeZone",
// status: "$dates.slots.status",
// time: "$dates.slots.time",
// dateId: "$dates._id",
// slotId: "$dates.slots._id",

const bookingsSchema = new mongoose.Schema(
  {
    name: {type:String},
    visitorId: {type:String},
    bookedTimeZone : {type:String},
    status: {type:String},
    time: {type:Date},
    dateId:{type:String},
    slotId: {type:String},
  }
)

const singleSlotsSchema = new mongoose.Schema(
  {
    time: { type: Date },
    status: { type: String, required: true },
    durationInMinutes: { type: Number, required: true },
    visitorId: { type: String },
    visitorName: { type: String },
    bookedTimeZone: { type: String },
    slotId: { type: String },
    myBookings: [bookingsSchema]
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
