import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Folder from './components/folder/folder';
import Navbar from './components/navbar/navbar';
import Link from './components/link/link';
import User from './components/user/user';
import Login from './components/login/login';
import { folderService } from "./services/folderService";

//Define Stateful Elements
class App extends Component {
  state = {
    user: "",
    userID: "",
    userFolderList: [],
    activeFolder: "",
    activeFolderContent: [],
    activeLinks: [],
    newFolder: "",
    newLink: "",
    newLinkHref: "",
    searchTerm: ""
  };

  //Triggered Function Logic

  componentDidMount() {


    this.getfolder();
  }

  setActiveFolder = event => {
    let folderInfo = this._id;
    this.setState({
      activeFolder: folderInfo
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

    {
      if (this.state.user)
        return (
          <div className="bg-dark">
            <Navbar
              logout={this.logout}
            />
            <User>
              <Folder>
                <Link />
              </Folder>
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
      };
    }

  }
}

export default App;