const mongoose = require("mongoose");

const logoSchema = new mongoose.Schema({
  logoName: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("logo", logoSchema);
