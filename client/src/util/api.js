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
    createfolder: function(folderObj) {
        return axios.post(`${baseURL}/folder/`, {folderObj});
    },
    //----------
    //Put
    //----------
    createLink: function(folderID, linkObj) {
        return axios.put(`${baseURL}/folder/${folderID}`, {linkObj});
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
    }
    ,
    deleteLink:  function(folderID, linkURL) {
        return axios.delete(`${baseURL}/folder/${folderID}`, {linkURL});
    }
    ,

}
