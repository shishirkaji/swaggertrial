var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MemberSchema = new Schema({
  phoneNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
});

module.exports = mongoose.model("Member", MemberSchema);
