const db = require("../models");

// Defining methods for the FolderController
module.exports = {
  returnAllFolders: function(req, res) {
    db.Folder.find({})
      .populate("users")
      .sort({ name: 1 })
      .then(dbFolders => res.json(dbFolders))
      .catch(err => res.status(422).json(err));
  },

  returnUserFolders: function(req, res) {
    db.User.findOne({ _id: req.params.userId })
      // .populate("folders")
      .then(dbFolders => res.json(dbFolders))
      .catch(err => res.status(422).json(err));
  },

  createFolder: function(req, res) {
    let query = { name: req.body.name, description: req.body.description };
    db.Folder.create(query)
      .then(dbFolder => {res.json(dbFolder) 
      console.log(dbFolder)})
      // .then(res => newFolder_id = res._id)
      .catch(err => res.status(400).json(err));
  },

  addFolderToUser: function(req, res) {
    console.log(JSON.stringify(req.body));
    let newUserFolder = {
      folders: req.body.folder_id,
      user_id: req.body.user_id
    };
    db.User.findOneAndUpdate(
      { _id: req.body.user_id },
      { $push: { folders: req.body.folder_id } },
      { new: true }
    ).then(
      db.Folder.findOneAndUpdate(
        { _id: req.body.folder_id },
        { $push: { users: req.body.user_id } },
        { new: true }
      )
        .then(dbFolder => res.json(dbFolder))
        .catch(err => res.status(400).json(err))
    );
  },

  addLink: function(req, res) {
    var link = {
      url: req.body.url,
      description: req.body.description,
      searchTerm: req.body.searchTerm
    };
    db.Folder.findOneAndUpdate(
      { _id: req.body.folder_id },
      { $push: { links: link } },
      { upsert: true }
    )
      .then(dbFolder => res.json(dbFolder))
      .catch(err => res.status(400).json(err));
  },

  deleteLink: function(req, res) {
    db.Folder.findOneAndUpdate(
      { _id: req.body.folder_id },
      { $pull: { links: { url: req.body.url } } },
      { new: true }
    )
      .then(dbFolder => res.json(dbFolder))
      .catch(err => res.status(400).json(err));
  },

  deleteUserFolder: function(req, res) {
    db.User.findOneAndUpdate(
      { _id: req.body.user_id },
      { $pullAll: { folders: [req.body.folder_id] } }
    )
      .then(dbFolder =>
        db.Folder.findOneAndUpdate(
          // { users: [req.body.user_id] },
          { _id: req.body.folder_id },
          {
            $pullAll: { users: [req.body.user_id] }
          }
        )
      )
      .then(dbFolder => res.json(dbFolder))
      .catch(err => res.status(400).json(err));
  },

  deleteFolder: function(req, res) {
    db.Folder.findOneAndDelete({ _id: req.body.folder_id })
      .then(dbFolder =>
        db.User.update(
          { folders: [req.body.folder_id] },
          {
            $pullAll: { folders: [req.body.folder_id] }
          }
        )
      )
      .then(dbFolder => res.json(dbFolder))
      .catch(err => res.status(400).json(err));
  },

  deleteUser: function(req, res) {
    db.User.findOneAndDelete({ _id: req.params.userId })
      .then(dbFolder => res.json(dbFolder))
      .catch(err => res.status(400).json(err));
  },

  addUser: function(req, res) {
    let query = { name: req.body.name, email: req.body.email };
    db.User.create(query)
      .then(dbFolder => res.json(dbFolder))
      .catch(err => res.status(400).json(err));
  }
};
