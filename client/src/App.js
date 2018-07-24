import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Folder  from './components/folder/folder';

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
    searchTerm:""
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
      <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Folder} />
        </Switch>
      </Router>
      </div>
    );
  }
}

{/* <div className="bg-dark">
<NavComp></NavComp>
<UserComp>
  <FolderComp>
    <LinkComp></LinkComp>
  </FolderComp>
</UserComp>

</div> */}

export default App;