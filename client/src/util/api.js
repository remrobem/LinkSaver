import axios from "axios";

const baseURL = 'http://localhost:3000/api/folders/'

export default {

    //----------
    //Get
    //----------
    getFolderbyId: function (id) {
        return axios.get(`${baseURL}${id}`);
    },
    getFolderbyUser: function (userID) {
        return axios.get(`${baseURL}returnUserFolders/${userID}`);
    },
    //----------
    //Post
    //----------
    createUser: function (userObj) {
        return axios.post(`${baseURL}/addUser`, { userObj });
    },
    createfolder: function (folderObj) {
        return axios.post(`${baseURL}/createFolder/`, { folderObj });
    },
    addFolderToUser: function (userFolderObj) {
        return axios.post(`${baseURL}addFolderToUser/`, { userFolderObj });
    },
    createLink: function (linkObj) {
        return axios.post(`${baseURL}addLink/`, { linkObj });
        //MUST RETURN NEW FOLDER INFO
    },
    deleteFolder: function (folderID, folderObj) {
        return axios.post(`${baseURL}/deleteFolder/${folderID}`, folderObj);
        //MUST RETURN NEW USER FOLDER INFO
    },
    //----------
    //Delete
    //----------
    deleteUser: function (userID) {
        return axios.delete(`${baseURL}${userID}`);
    },
    deleteUserFolder: function (userID) {
        return axios.delete(`${baseURL}deleteUserFolder/${userID}`);
    },
    deleteLink: function (linkURL) {
        return axios.delete(`${baseURL}/deletelink/`, { linkURL });
        //MUST RETURN NEW FOLDER
    },

}
