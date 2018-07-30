//----------
//Declare Imports
//----------

import React, { Component } from "react";
import "./App.css";
import api from "./util/api";
import Folder from "./components/folder/folder";
import InnactiveFolder from "./components/innactiveFolder/innactiveFolder";
import Navbar from "./components/navbar/navbar";
import User from "./components/user/user";
import Login from "./components/login/login";

//****************************

import injectTapEventPlugin from "react-tap-event-plugin";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import routes from './routes.js';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import Base from "./components/Base.jsx";
import HomePage from "./components/HomePage.jsx";
import LoginPage from "./containers/LoginPage.jsx";
import LogoutFunction from "./containers/LogoutFunction.jsx";
import SignUpPage from "./containers/SignUpPage.jsx";
import DashboardPage from "./containers/DashboardPage.jsx";
import Auth from "./modules/Auth";

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.isUserAuthenticated() ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const LoggedOutRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.isUserAuthenticated() ? (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      ) : (
        <Component {...props} {...rest} />
      )
    }
  />
);

const PropsRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} {...rest} />} />
);

//******************************/

function dynamicSort(a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  console.log(nameA);
  console.log(nameB);
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
}

//----------
//Define State
//----------

class App extends Component {
  state = {
    user: "",
    userID: "",
    //userFolderList: [{ name: "1", _id: "1", description: "Test data in multiples of 1", links: [{ url: "1", name: "1" }, { url: "2", name: "2" }, { url: "3", name: "3" }] }, { name: "2", _id: "2", description: "Test data in multiples of 2", links: [{ url: "2", name: "2" }, { url: "4", name: "4" }, { url: "6", name: "6" }] }, { name: "3", _id: "3", description: "Test data in multiples of 3", links: [{ url: "3", name: "3" }, { url: "6", name: "6" }, { url: "9", name: "9" }] }],
    //innactiveFolders: [{ name: "1", _id: "1", description: "Test data in multiples of 1", links: [{ url: "1", name: "1" }, { url: "2", name: "2" }, { url: "3", name: "3" }] }, { name: "2", _id: "2", description: "Test data in multiples of 2", links: [{ url: "2", name: "2" }, { url: "4", name: "4" }, { url: "6", name: "6" }] }, { name: "3", _id: "3", description: "Test data in multiples of 3", links: [{ url: "3", name: "3" }, { url: "6", name: "6" }, { url: "9", name: "9" }] }],
    userFolderList: [],
    innactiveFolders: [],
    activeFolders: [],
    newFolder: "default",
    newDescription: "default",
    newURL: "default",
    searchTerm: "",
    authenticated: false
  };

  //----------
  //Function Library
  //----------

  //Helper Functions
  //----------
  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  copy = coppiedText => {
    coppiedText.select();
    document.execCommand("copy");
  };

  //GUI Functions
  //----------
  setActiveFolder = (folderID, inputCase) => {
    let newActiveFolders;
    let newInnactiveFolders;
    const currentActive = this.state.activeFolders;
    const currentInnactive = this.state.innactiveFolders;

    switch (inputCase) {
      case "active":
        newActiveFolders = currentActive.filter(item => item._id !== folderID);
        newInnactiveFolders = currentInnactive.concat(
          currentActive.filter(item => item._id === folderID)
        );
        break;

      case "innactive":
        newInnactiveFolders = currentInnactive.filter(
          item => item._id !== folderID
        );
        newActiveFolders = currentActive.concat(
          currentInnactive.filter(item => item._id === folderID)
        );
        break;

      default:
    }
    let active = newActiveFolders.sort(dynamicSort);
    let innactive = newInnactiveFolders.sort(dynamicSort);

    this.setState({
      ...this.state,
      activeFolders: active,
      innactiveFolders: innactive
    });
  };

  //CRUD Functions
  //----------

  //User Functions
  //----------

  setUser = event => {
    let userAuthName;
    let userAuthID;
    let userFolders = [];

    //REQUIRE AUTENTICATION LOGIC HERE

    userAuthName = "User One";
    userAuthID = "5b5c9d75e862220468afc741";

    api.getFolderbyUser(userAuthID).then(response => {
      console.log(response.data);
      userFolders = response.data.folders;
      console.log(userFolders);
      this.setState({
        ...this.state,
        user: userAuthName,
        userID: userAuthID,
        userFolderList: userFolders,
        innactiveFolders: userFolders
      });
      //console.log(this.state);
    });

    this.setState({
      ...this.state,
      user: userAuthName,
      userID: userAuthID,
      userFolderList: userFolders,
      innactiveFolders: userFolders
    });
  };

  logout = event => {
    this.setState({
      ...this.state,
      user: "",
      userID: ""
    });
  };

  createUser = event => {};

  deleteUser = event => {};

  //Folder Functions
  //----------
  addFolder = () => {
    const Name = this.state.newFolder;
    const Description = this.state.newDescription;
    const newFolder = { name: Name, description: Description };
    console.log(newFolder);

    api.createfolder(newFolder);

    this.setState({
      ...this.state,
      newFolder: "",
      newDescription: ""
    });
  };

  deleteFolder = folderID => {
    console.log(`Folder ID of ${folderID} to be deleted`);
    const folderObj = { folder_id: folderID };
    api.deleteFolder(folderID, folderObj);
  };

  //Link Functions
  //----------
  addLink = folderID => {
    const search = this.state.searchTerm;
    const URL = this.state.newURL;
    const description = this.state.newDescription;
    const newLink = {
      url: URL,
      description: description,
      searchTerm: search,
      folder_id: folderID
    };
    console.log(newLink);

    api.createLink(newLink);

    this.setState({
      ...this.state,
      newUrl: "",
      newDescription: "",
      searchTerm: ""
    });
  };

  deleteLink = (folderID, linkUrl) => {
    //axios delete request to remove link from folder
    //must return new object for folder
    const linkObj = { folder_id: folderID, url: linkUrl };
    console.log(
      `Link of  Link URL: ${linkUrl} to be deleted from Folder ID of ${folderID}`
    );
    api.deleteLink(linkObj);
  };
  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus();
  }

  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() });
  }
  //----------
  //Render Page
  //----------
  render() {
    // if (this.state.user)
    if (this.state.authenticated)
      return (
        <div className="bg-dark">
          <Navbar logout={this.logout} />
          <User
            userID={this.state.userID}
            addFolder={this.addFolder}
            handleInputChange={this.handleInputChange}
          >
            {this.state.activeFolders.map(folder => (
              <Folder
                key={folder._id}
                _id={folder._id}
                folderURL={`linksaver/folder/${folder._id}`}
                name={folder.name}
                links={folder.links}
                description={folder.description}
                handleInputChange={this.handleInputChange}
                setActiveFolder={this.setActiveFolder}
                deleteFolder={this.deleteFolder}
                deleteLink={this.deleteLink}
                copy={this.copy}
                addLink={this.addLink}
              />
            ))}
            {this.state.innactiveFolders.map(folder => (
              <InnactiveFolder
                key={folder._id}
                _id={folder._id}
                name={folder.name}
                description={folder.description}
                setActiveFolder={this.setActiveFolder}
                deleteFolder={this.deleteFolder}
              />
            ))}
          </User>
        </div>
      );
    else {
      return (
        // <div>
        //   <Login
        //     handleInputChange={this.handleInputChange}
        //     setUser={this.setUser}
        //   />
        // </div>

        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Router>
            <div>
              <div className="top-bar">
                <div className="top-bar-left">
                  <Link to="/">React App</Link>
                </div>
                {this.state.authenticated ? (
                  <div className="top-bar-right">
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/logout">Log out</Link>
                  </div>
                ) : (
                  <div className="top-bar-right">
                    <Link to="/login">Log in</Link>
                    <Link to="/signup">Sign up</Link>
                  </div>
                )}
              </div>

              <PropsRoute
                exact
                path="/"
                component={HomePage}
                toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()}
              />
              <PrivateRoute path="/dashboard" component={DashboardPage} />
              <LoggedOutRoute
                path="/login"
                component={LoginPage}
                toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()}
              />
              <LoggedOutRoute path="/signup" component={SignUpPage} />
              <Route path="/logout" component={LogoutFunction} />
            </div>
          </Router>
        </MuiThemeProvider>
      );
    }
  }
}

export default App;
