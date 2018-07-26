import React, { Component } from "react";
import "./App.css";
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Folder from './components/folder/folder';
import InnactiveFolder from './components/innactiveFolder/innactiveFolder';
import Navbar from './components/navbar/navbar';
//import Link from './components/link/link';
import User from './components/user/user';
import Login from './components/login/login';
import { folderService } from "./services/folderService";

//Define Stateful Elements
class App extends Component {
  state = {
    user: "",
    userID: "",
    userFolderList: [{ title: "1", _id: "1", links: [{ url: "1", title: "1" }, { url: "2", title: "2" }, { url: "3", title: "3" }] }, { title: "2", _id: "2", links: [{ url: "2", title: "2" }, { url: "4", title: "4" }, { url: "6", title: "6" }] }, { title: "3", _id: "3", links: [{ url: "3", title: "3" }, { url: "6", title: "6" }, { url: "9", title: "9" }] }],
    innactiveFolders: [{ title: "1", _id: "1", links: [{ url: "1", title: "1" }, { url: "2", title: "2" }, { url: "3", title: "3" }] }, { title: "2", _id: "2", links: [{ url: "2", title: "2" }, { url: "4", title: "4" }, { url: "6", title: "6" }] }],
    activeFolders: [{ title: "3", _id: "3", links: [{ url: "3", title: "3" }, { url: "6", title: "6" }, { url: "9", title: "9" }] }],
    newFolder: "",
    newLink: "",
    newLinkHref: "",
    searchTerm: ""
  };

  //Triggered Function Logic

  componentDidMount() {
  }

  setActiveFolder = (folderID, inputCase) => {

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
    }
    this.setState({
      ...this.state,
      activeFolders: newActiveFolders,
      innactiveFolders: newInnactiveFolders
    })
  };

  setUser = event => {
    let userAuthName;
    let userAuthID;

    //REQUIRE AUTENTICATION LOGIC HERE


    userAuthName = "Some Value For User Name"
    userAuthID = "Some Value For User ID"
    this.setState({
      ...this.state,
      user: userAuthName,
      userID: userAuthID
    });
  };

  logout = event => {
    this.setState({
      ...this.state,
      user: "",
      userID: ""
    })
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  copy = (coppiedText) => {
    //Code to copy selection to clipboard
    coppiedText.select();
    /* Copy the text inside the text field */
    document.execCommand("copy");
  }

  //Function declaration Library

  createNewLink = (title, href) => {


  };

  getfolder() {
    folderService
      .queryForFolders()
      //   .then(res => this.setState({ folders: res.data }));
      .then(res => this.setState({ ...this.state, folders: res.data }));
  }


  //Render Page
  render() {
    if (this.state.user)
      return (
        <div className="bg-dark">
          <Navbar
            logout={this.logout}
          />
          <User>
            {this.state.activeFolders.map(folder => (
              <Folder
                key={folder._id}
                _id={folder._id}
                title={folder.title}
                links={folder.links}
                setActiveFolder={this.setActiveFolder}
                removeLink={this.removeLink}
                copy={this.copy}
              />
            ))}
            {this.state.innactiveFolders.map(folder => (
              <InnactiveFolder
                key={folder._id}
                _id={folder._id}
                title={folder.title}
                setActiveFolder={this.setActiveFolder}
              />
            ))}
          </User>
        </div>
      );

    else {
      return (
        <div>
          <Navbar
            logout={this.logout}
          />
          <Login
            handleInputChange={this.handleInputChange}
            setUser={this.setUser}
          />
        </div>
      );
    }
  }
}

export default App;