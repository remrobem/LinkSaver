import Express from "express";
import Models from "../models/";
import Router from Express.Router();
import Controller from "../controller/"

const userFolder = Models.userFolder;
const folder = Models.folder;
const user = Models.User;
let combine;

const combineUser = (first,second) => (
        combine = {
            user: first,
            userFolder: second
        }

);


//API Routes
Router.get("/api/user/:id", function (req, res) {
        let firstReturn;
        user.returnUser(req.params.id).then(result => {
            console.log(result);
            firstReturn = result;
        })
        let secondReturn;
        userFolder.returnUserFolder(req.params.id).then(result => {
            console.log(result);
            secondReturn = result;
        })
        setTimeout(combineUser(firstReturn,secondReturn), 1000)
});

Router.get("/api/folder/:id", function (req, res) {
    userFolder.returnFolder(req.params.id).then(result => {
        console.log(result);
        res.json({ result })
    })
});

Router.post("/api/folder/:id", function (req, res) {
    userFolder.addFolder(req.params.id, data)
});

Router.post("/api/link/:id", function (req, res) {
    userFolder.addLink(req.params.id, data)
});

Router.delete("/api/folder/:id", function (req, res) {
    userFolder.deleteFolder(req.params.id, data)
});

Router.delete("/api/link/:id", function (req, res) {
    userFolder.deleteLink(req.params.id, data)
});



export default Router;