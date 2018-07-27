export default {

    //----------
    //Folder methods
    //----------

    addFolder: function (userID) {
        let sanitizeTitle = this.state.newFolder.toLowerCase();
        const newFolder = { UserID: userID, title: sanitizeTitle };
        console.log(newFolder);
        //axios post request to user for new folder
    },

    //----------
    //User methods
    //----------

    //----------
    //Link Methods
    //----------

    addLink: function (folderID) {
        let sanitizeTitle = this.state.newTitle.toLowerCase();
        let sanitizeURL = this.state.newURL.toLowerCase();
        const newLink = { folderID: folderID, title: sanitizeTitle, url: sanitizeURL };
        console.log(newLink);
        //axios post request to folder for new link entry
    },

    //----------
    //Service methods
    //----------

    handleInputChange: function (event) {
        const { name, value } = event.target;
        console.log(name, value);
        this.setState({
            [name]: value
        });
    },

    setActiveFolder: function (folderID, inputCase) {
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
        this.setState({
            ...this.state,
            activeFolders: newActiveFolders,
            innactiveFolders: newInnactiveFolders
        })
    },

    copy: function (coppiedText) {
        coppiedText.select();
        document.execCommand("copy");
    },

}