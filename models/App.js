const mongoose = require("mongoose");

const AppSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  createDate: {
    type: Date,
    default: Date.now(),
  },
  pushTokens: [String],
});

module.exports = mongoose.model("App", AppSchema, "apps");
