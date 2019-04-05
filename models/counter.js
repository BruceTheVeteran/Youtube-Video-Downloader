var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var counterSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  amount: Number,
});
module.exports = mongoose.model('Counter', counterSchema);
