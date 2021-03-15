const mongoose = require("mongoose");

const sermonSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: [true, 'Please enter title'],
  },
  body: {
    type: String,
    // required: [true, "Please enter a sermon body"],
  },
  category: {
    type: String,
    // required: [true, "Please enter a category"],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Sermon = mongoose.model("Sermon", sermonSchema);

module.exports = Sermon;
