const mongoose = require("mongoose");

const passengerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  trainId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Train",
  },
  trainName: String,
  journeyDate: String,
  travelClass: String,
  pnr: String,
  status: {
    type: String,
    default: "Waiting",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Passenger", passengerSchema);
