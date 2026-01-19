const express = require("express");
const Passenger = require("../models/Passenger");
const router = express.Router();

router.post("/register", async (req, res) => {
  const pnr = "PNR" + Date.now().toString().slice(-6);
  const passenger = new Passenger({ ...req.body, pnr });
  await passenger.save();
  res.json(passenger);
});

router.get("/", async (req, res) => {
  const passengers = await Passenger.find();
  res.json(passengers);
});

router.get("/pnr/:pnr", async (req, res) => {
  const passenger = await Passenger.findOne({ pnr: req.params.pnr });
  res.json(passenger);
});

router.put("/:id/status", async (req, res) => {
  await Passenger.findByIdAndUpdate(req.params.id, {
    status: req.body.status,
  });
  res.json({ message: "Status updated" });
});

router.delete("/:id", async (req, res) => {
  await Passenger.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
