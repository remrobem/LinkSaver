import axios from "axios";

const baseURL = '/api/'

export default {

    //----------
    //Get
    //----------
    getFolderbyId: function (id) {
        return axios.get(`${baseURL}/folder/${id}`);
    },

    getFolderbyUser: function (userID) {
        return axios.get(`${baseURL}/folder/${userID}`);
    },
    //----------
    //Post
    //----------
    createUser: function(userObj) {
        return axios.post(`${baseURL}/user/`, {userObj});
    },
    createfolder: function(folderObj, userID) {
        return axios.post(`${baseURL}/folder/:${userID}`, {folderObj});
        //MUST RETURN NEW USER INFO
    },
    //----------
    //Put
    //----------
    createLink: function(folderID, linkObj) {
        return axios.put(`${baseURL}/folder/${folderID}`, {linkObj});
        //MUST RETURN NEW FOLDER INFO
    },
    //----------
    //Delete
    //----------
    deleteUser: function(userID) {
        return axios.delete(`${baseURL}/user/${userID}`);
    }
    ,
    deleteFolder: function(folderID) {
        return axios.delete(`${baseURL}/folder/${folderID}`);
        //MUST RETURN NEW USER FOLDER INFO
    }
    ,
    deleteLink:  function(folderID, linkURL) {
        return axios.delete(`${baseURL}/folder/${folderID}`, {linkURL});

        //MUST RETURN NEW FOLDER
    }
    ,

}
