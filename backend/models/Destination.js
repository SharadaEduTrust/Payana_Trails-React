const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    heroImage: {
      type: String, // Path to the uploaded image
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Destination", destinationSchema);
