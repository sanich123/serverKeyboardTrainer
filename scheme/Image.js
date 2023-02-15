const mongoose = require("mongoose");

const Image = new mongoose.Schema({
  picture: { type: String, required: true },
});

module.exports = mongoose.model("Image", Image);
