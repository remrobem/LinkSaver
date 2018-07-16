const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const folderSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  links:[{ 
      url: { type: URL },
      description: { type: String }
  }],
  subFolders: [{
      folder_id: { type = String }
  }]
});

const Folder = mongoose.model("Folder", folderSchema);

module.exports = Folder;