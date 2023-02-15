import mongoose from "mongoose";

const Image = new mongoose.Schema({
  picture: { type: String, required: true },
});

export default mongoose.model("Image", Image);
