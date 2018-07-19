import React, { Component } from 'react';
import './App.css';
import LinkComp from "./components/stateless/link/link"
import FolderComp from "./components/stateless/folder/folder"
import NavComp from "./components/stateless/navbar/navbar"
import UserComp from "./components/stateless/user/user"
import axios from "axios"

class App extends Component {
  state = {
    user: "",
    userID: "",
    userFolderList: [],
    activeFolder: "",
    activeFolderContent: [],
    activeLinks:[],
    newFolder:"",
    newLink:"",
    newLinkHref:"",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  createNewLink = (title, href) => {


  };



  render() {
    return (
      <div className="bg-dark">
        <NavComp></NavComp>
        <UserComp>
          <FolderComp>
            <LinkComp></LinkComp>
          </FolderComp>
        </UserComp>

      </div>
    );
  }
}

export default App;
