const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true},
  folders:[{
    type: mongoose.Schema.Types.ObjectId,ref: 'Folder'
  }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;