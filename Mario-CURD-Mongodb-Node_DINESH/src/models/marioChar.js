const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//  Your code goes here
const marioSchema = new Schema({
  name: { type: String, required: true },
  weight: { type: Number, required: true },
  characterDied: Boolean,
});

marioModel = mongoose.model("mario", marioSchema);
module.exports = marioModel;
