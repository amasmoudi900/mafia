// import mongoose module
const mongoose = require("mongoose");
// create match schema (attributes)
const matchSchema = mongoose.Schema({
  scoreOne: Number,
  scoreTwo: Number,
  teamOne: String,
  teamTwo: String,
});
// create model (PascalCase)
const match = mongoose.model("Match", matchSchema);
module.exports = match;
