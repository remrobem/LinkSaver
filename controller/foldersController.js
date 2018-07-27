const db = require("../models");

// Defining methods for the FolderController
module.exports = {
 
  returnAllFolders: function(req, res) {
    db.Folder
      .find({})
      .populate('users')
      .sort({ name: 1 })
      .then(dbFolders => res.json(dbFolders))
      .catch(err => res.status(422).json(err));
  },

  returnUserFolders: function(req, res) {
    console.log("aaa" + req.params.userId)
    db.User
      .findOne({_id: req.params.userId})
      .populate('folders')
      .then(dbFolders => res.json(dbFolders))
      .catch(err => res.status(422).json(err));
  },

  returnFolder: function(req, res) {
    db.Folder
      .findById(req.params.id)
      .then(dbFolder => res.json(dbFolder))
      .catch(err => res.status(400).json(err));
  },

  createFolder: function(req, res) {
    let query = {name: req.body.name, description: req.body.description}
    db.Folder
      .create(query)
      .then(dbFolder => res.json(dbFolder))
      // .then(res => newFolder_id = res._id)
      .catch(err => res.status(400).json(err));
  },

  addFolderToUser: function(req,res) {
    console.log(JSON.stringify(req.body))
    let newUserFolder = {folders: req.body.folder_id, user_id: req.body.user_id};
    db.User
      .findOneAndUpdate({_id: req.body.user_id}, { $push: {folders: req.body.folder_id}}, {new:true})
      .then(dbFolder => res.json(dbFolder))
      .catch(err => res.status(400).json(err))
  },

  addUserToFolder: function(req,res) {
    console.log(JSON.stringify(req.body))
    
    db.Folder
      .findOneAndUpdate({_id: req.body.folder_id}, { $push: {users: req.body.user_id}}, {new:true})
      .then(dbFolder => res.json(dbFolder))
      .catch(err => res.status(400).json(err))
  },

  addLink: function(req, res) {
    var link = {"url": req.body.url, "description": req.body.description, "searchTerm": req.body.searchTerm};
    db.Folder
      .findOneAndUpdate({ _id: req.body.folder_id }, {$push: {links: link} }, {new:true})
      .then(dbFolder => res.json(dbFolder))
      .catch(err => res.status(400).json(err));
  },
  // updateFolder: function(req, res) {
  //   db.Folder
  //     .findOneAndUpdate({ _id: req.params.id }, req.body, {new: true})
  //     .then(dbFolder => res.json(dbFolder))
  //     .catch(err => res.status(400).json(err));
  // },
  deleteFolder: function(req, res) {
    db.Folder
      .findById({ _id: req.params.id })
      .then(dbFolder => dbFolder.remove())
      .then(dbFolder => res.json(dbFolder))
      .catch(err => res.status(400).json(err));
  }
};
