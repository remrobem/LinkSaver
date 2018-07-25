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
    userFolderList: [{title: "1", _id:"1", links: [{url:"1", title: "1"},{url:"2", title: "2"},{url:"3", title: "3"}] }, {title: "2", _id:"2", links: [{url:"2", title: "2"},{url:"4", title: "4"},{url:"6", title: "6"}] }, {title: "3", _id:"3", links: [{url:"3", title: "3"},{url:"6", title: "6"},{url:"9", title: "9"}] }],
    innactiveFolders: [{title: "1", _id:"1", links: [{url:"1", title: "1"},{url:"2", title: "2"},{url:"3", title: "3"}] }, {title: "2", _id:"2", links: [{url:"2", title: "2"},{url:"4", title: "4"},{url:"6", title: "6"}] }],
    activeFolders: [{title: "3", _id:"3", links: [{url:"3", title: "3"},{url:"6", title: "6"},{url:"9", title: "9"}] }],
    newFolder: "",
    newLink: "",
    newLinkHref: "",
    searchTerm: ""
  };

  //Triggered Function Logic

  componentDidMount() {
  }

  setActiveFolder = folderID => {
    //API request to internal API using "this.id" to return all of folder object

    let result = this.state.userFolderList[folderID]
    let current = this.state.activeFolders;
    const newArray = current.push(result);
    console.log(`Result: ${result}`)
    console.log(`Current: ${current}`)
    console.log(`New array: ${newArray}`)
    this.setState({
      activeFolders: newArray
    })
  };

  removeActiveFolder = folderID => {
    const folderInfo = folderID
    let current = this.state.activeFolders
    console.log(folderInfo);
    console.log(current);
    const newArray = current.filter(folder => folder._id !== folderInfo);
    console.log(newArray);

    this.setState({
      activeFolders: newArray
    })
  };

  setUser = event => {
    let userAuthName;
    let userAuthID;
    //REQUIRE AUTENTICATION LOGIC HERE


    userAuthName = "Some Value For User Name"
    userAuthID = "Some Value For User ID"
    this.setState({
      user: userAuthName,
      userID: userAuthID
    });
  };

  logout = event => {
    this.setState({
      user: "",
      userID: ""
    })
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
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
      .then(res => this.setState({ folders: res.data }));
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
                  removeActiveFolder={this.removeActiveFolder}
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