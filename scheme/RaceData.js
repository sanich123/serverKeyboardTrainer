import mongoose from "mongoose";

const RaceData = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  speed: { type: Number, required: true },
  mistakes: { type: Number, required: true },
});

export default mongoose.model("RaceData", RaceData);
