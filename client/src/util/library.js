import api from './api'

//----------
//Function Library
//----------
const Library = {
    //Helper Functions
    //----------
    handleInputChange:  event => {
        const { name, value } = event.target;
        console.log(name, value);
        this.setState({
            [name]: value
        });
    },

    copy: (coppiedText) => {
        coppiedText.select();
        document.execCommand("copy");
    },

    //GUI Functions
    //----------
    setActiveFolder: (folderID, inputCase) => {

        let newActiveFolders;
        let newInnactiveFolders;
        const currentActive = this.state.activeFolders;
        const currentInnactive = this.state.innactiveFolders;

        switch (inputCase) {
            case "active":
                newActiveFolders = currentActive.filter(item => item._id !== folderID);
                newInnactiveFolders = currentInnactive.concat(currentActive.filter(item => item._id === folderID))
                break;

            case "innactive":
                newInnactiveFolders = currentInnactive.filter(item => item._id !== folderID);
                newActiveFolders = currentActive.concat(currentInnactive.filter(item => item._id === folderID))
                break;

            default:
        }
        let active = newActiveFolders.sort(this.dynamicSort);
        let innactive = newInnactiveFolders.sort(this.dynamicSort);

        this.setState({
            ...this.state,
            activeFolders: active,
            innactiveFolders: innactive
        });
    },

    dynamicSort: (a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    },

    openPanel: () => {
        this.setState({
            ...this.state,
            user: "new"
        });
    },

    //CRUD Functions
    //----------

    //User Functions
    //----------

    setUser: (userID) => {
        let userAuthName;
        let userAuthID;
        let userFolders = [];

        //REQUIRE AUTENTICATION LOGIC HERE

        userAuthName = "User One"
        userAuthID = "5b5c9d75e862220468afc741"

        api.getFolderbyUser(userAuthID).then(response => {
            userFolders = response.data.folders
            this.setState({
                ...this.state,
                user: userAuthName,
                userID: userAuthID,
                userFolderList: userFolders,
                innactiveFolders: userFolders,
            });
        })
    },

    logout: () => {
        this.setState({
            ...this.state,
            user: "",
            userID: "",
            userFolderList: [],
            innactiveFolders: [],
            activeFolders: [],
            newFolder: "default",
            newDescription: "default",
            newURL: "default",
            searchTerm: "",
        });
    },

    createUser: (newUsername, newUserEmail, newUserPassword) => {
        const userObj = { name: newUsername, email: newUserEmail, password: newUserPassword };
        api.createUser(userObj).then((response) => {
            this.setUser(response._id)
        });
    },

    deleteUser: (userFolderID, userID) => {
        const folderObj = { folder_id: userFolderID, user_id: userID };
        api.deleteUserFolder(folderObj);
        api.deleteUser(userID);
        this.logout();
    },

    reloadFolders: (userID) => {
        api.getFolderbyUser(userID).then(response => {
            const userFolders = response.data.folders
            this.setState({
                ...this.state,
                userFolderList: userFolders,
                innactiveFolders: userFolders,
            });
        });
    },

    //Folder Functions
    //----------
    addFolder: () => {
        const Name = this.state.newFolder;
        const Description = this.state.newDescription;
        const newFolder = { name: Name, description: Description };
        api.createfolder(newFolder).then(() => {
            const userID = this.state.userID;
            this.reloadfolders(userID);
        });
        this.setState({
            ...this.state,
            newFolder: "",
            newDescription: "",
        });
    },

    deleteFolder: (folderID) => {
        console.log(`Folder ID of ${folderID} to be deleted`);
        const folderObj = { folder_id: folderID };
        api.deleteFolder(folderID, folderObj).then(() => {
            const userID = this.state.userID;
            this.reloadfolders(userID);
        });
    },

    //Link Functions
    //----------
    addLink: (folderID) => {
        const search = this.state.newname;
        const URL = this.state.newURL;
        const description = this.state.newDescription;
        const newLink = { url: URL, description: description, searchTerm: search, folder_id: folderID };
        api.createLink(newLink).then(() => {
            const userID = this.state.userID;
            this.reloadfolders(userID);
        });
        this.setState({
            ...this.state,
            newUrl: "",
            newDescription: "",
            newname: "",
        });
    },

    deleteLink: (folderID, linkUrl) => {
        const linkObj = { folder_id: folderID, url: linkUrl };
        api.deleteLink(linkObj).then(() => {
            const userID = this.state.userID;
            this.reloadfolders(userID);
        });
    },
};

export default Library

  // //Helper Functions
  // handleInputChange = event => Library.handleInputChange;
  // copy = (coppiedText) => Library.copy(coppiedText);

  // //GUI Functions
  // setActiveFolder = (folderID, inputCase) => Library.setActiveFolder(folderID, inputCase)
  // dynamicSort = (a, b) => Library.dynamicSort(a, b);
  // openPanel = () => Library.openPanel;

  // // //CRUD Functions

  // // //User Functions
  // setUser = (userID) => Library.setUser(userID);
  // logout = () => Library.logout;
  // createUser = (newUsername, newUserEmail, newUserPassword) => Library.createUser(newUsername, newUserEmail, newUserPassword);
  // deleteUser = (userFolderID, userID) => Library.deleteUser(userFolderID, userID);
  // reloadFolders = (userID) => Library.reloadFolders(userID);
  // // //Folder Functions
  // addFolder = () => Library.addFolder();
  // deleteFolder = (folderID) => Library.deleteFolder(folderID);
  // // //Link Functions
  // addLink = (folderID) => Library.addLink(folderID);