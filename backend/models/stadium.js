// import mongoose module
const mongoose = require("mongoose");
// create stadium schema (attributes)
const stadiumSchema = mongoose.Schema({
  foundation: Number,
  capacity: Number,
  name: String,
  country: String,
});
// create model (PascalCase)
const stadium = mongoose.model("Stadium", stadiumSchema);
module.exports = stadium;
