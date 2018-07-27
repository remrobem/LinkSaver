const router = require("express").Router();
const foldersController = require("../../controller/foldersController");
// const userFolderController = require("../../controller/UserFolderController");
// const users = require("../../controller/usersController");

//API routes

//write in all routes so they are able to be hit by postman

//Get Routes
//Get Folders for user    /returnUserFolders/:userId

//Post Routes
//Post New Folder (userID)
//Post New Link (folder ID)
//Create new user
//Share folder (User ID, folder ID)

//Delete Routes
//Delete folder from user
//Delete Link
//Delete User

router.route("/returnAllFolders")
.get(foldersController.returnAllFolders);

router.route("/returnUserFolders/:userId")
.get(foldersController.returnUserFolders);

router.route("/createFolder")
.post(foldersController.createFolder);

router.route("/addUserToFolder")
.post(foldersController.addUserToFolder);

router.route("/addFolderToUser")
.post(foldersController.addFolderToUser);

router.route("/addFolderToUser")
.post(foldersController.addFolderToUser);

router.route("/addLink")
.post(foldersController.addLink);


module.exports = router;

// router.route.get("/api/user/:id", function (req, res) {
//     let firstReturn;
//     user.returnUser(req.params.id).then(result => {
//         console.log(result);
//         firstReturn = result;
//     })
//     let secondReturn;
//     userFolder.returnUserFolder(req.params.id).then(result => {
//         console.log(result);
//         secondReturn = result;
//     })
//     setTimeout(combineUser(firstReturn,secondReturn), 1000)
// });

// router.route.get("/api/folder/:id", function (req, res) {
// userFolder.returnFolder(req.params.id).then(result => {
//     console.log(result);
//     res.json({ result })
// })
// });

// router.route.get("/api/folder/:id", function (req, res) {
// userFolder.returnFolder(req.params.id).then(result => {
//     console.log(result);
//     res.json({ result })
// })
// });
// export default Router;
