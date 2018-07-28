import axios from "axios";

const baseURL = '/api/folders/'

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
    createUser: function(userObj) {
        return axios.post(`${baseURL}`, {userObj});
    },
    createfolder: function(folderObj) {
        return axios.post(`${baseURL}/createFolder/`, {folderObj});
    },
    addFolderToUser: function(userFolderObj) {
        return axios.post(`${baseURL}addFolderToUser/`, {userFolderObj});
    },

    createLink: function(linkObj) {
        return axios.post(`${baseURL}addLink/`, {linkObj});
        //MUST RETURN NEW FOLDER INFO
    },
    //----------
    //Delete
    //----------
    deleteUser: function(userID) {
        return axios.delete(`${baseURL}${userID}`);
    }
    ,
    deleteFolder: function(folderID) {
        return axios.delete(`${baseURL}/deleteFolder/${folderID}`);
        //MUST RETURN NEW USER FOLDER INFO
    }
    ,
    deleteLink:  function(folderID, linkURL) {
        return axios.delete(`${baseURL}/deletelink/`, {linkURL});
        //MUST RETURN NEW FOLDER
    }
    ,

}
