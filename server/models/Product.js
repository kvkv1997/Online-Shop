const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  amount: {
    type: Number,
  },
});
module.exports = mongoose.model("Product", Product);
