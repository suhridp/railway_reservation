const mongoose = require("mongoose");

const trainSchema = new mongoose.Schema({
  trainName: String,
  trainNumber: String,
  source: String,
  destination: String,
  classes: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Train", trainSchema);
