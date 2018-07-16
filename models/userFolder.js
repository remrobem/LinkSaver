const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userFolderSchema = new Schema({
  user_id: { type: String, required: true },
  folder_id: { type: String, required: true },
  read_access: { type: Boolean, default: true},
  update_access: { type: Boolean, default: false}
});

const UserFolder = mongoose.model("UserFolder", userFolderSchema);

module.exports = UserFolder;