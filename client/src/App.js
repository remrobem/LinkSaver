import React, { Component } from 'react';
import './App.css';
import LinkComp from "./components/stateless/link/link"
import FolderComp from "./components/stateless/folder/folder"
import NavComp from "./components/stateless/navbar/navbar"
import UserComp from "./components/stateless/user/user"

class App extends Component {
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
