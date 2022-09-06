// import mongoose module
const mongoose = require("mongoose");
// create player schema (attributes)
const playerSchema = mongoose.Schema({
  nbr: Number,
  age: Number,
  name: String,
  position: String,
  img:String
});
// create model (PascalCase)
const player = mongoose.model("Player", playerSchema);
module.exports = player;
