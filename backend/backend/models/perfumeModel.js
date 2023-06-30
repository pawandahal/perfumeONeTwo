const mongoose = require("mongoose");

const perfumeSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: false,
  },
  perfumeType: {
    type: String,
    required: false,
  },
  discountPrice: {
    type: Number,
    required: false,
  },
  discountPercent: {
    type: String,
    required: false,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  perfumeCategory: {
    type: String,
    required: false,
  },
  brandName: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  price: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("perfume", perfumeSchema);