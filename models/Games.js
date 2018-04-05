const mongoose = require("mongoose");
const { Schema } = mongoose;

const gameSchema = new Schema({
  title: String,
  price: Number,
  cover: String
});

module.exports = mongoose.model("games", gameSchema);

