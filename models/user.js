const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: password, required: true}
});

const User = mongoose.model("User", UserSchema);

module.exports = User;