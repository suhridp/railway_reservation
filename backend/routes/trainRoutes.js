const express = require("express");
const Train = require("../models/Train");
const router = express.Router();
const Passenger = require("../models/Passenger");
const auth = require("../middleware/auth");

router.post("/", async (req, res) => {
  const train = new Train(req.body);
  await train.save();
  res.json(train);
});

router.get("/", async (req, res) => {
  const trains = await Train.find();
  res.json(trains);
});


// DELETE TRAIN (PROTECTED + CHECK PASSENGERS)
router.delete("/:id", auth, async (req, res) => {
  try {
    const passengers = await Passenger.find({ trainId: req.params.id });

    if (passengers.length > 0) {
      return res.status(400).json({
        message: "Cannot delete train. Passengers are registered."
      });
    }

    await Train.findByIdAndDelete(req.params.id);
    res.json({ message: "Train deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
