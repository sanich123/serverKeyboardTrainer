const mongoose = require('mongoose');

const RaceData = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  speed: { type: Number, required: true },
  mistakes: { type: Number, required: true },
});

module.exports = mongoose.model("RaceData", RaceData);
