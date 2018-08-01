# LinkSaver 

## Description

LinkSaver is a developer focused JavasScript tool designed for saving and sharing of links between collaborators.

It stores folders in a Mongo DB associated with specific users, and allows for the folders to be shared between different users. Each user can update and change the folders that are assigned to them for maximum collaborative payoff.

## Using the Application

The application can be found [on Heroku](https://linksaver2018.herokuapp.com/)

1. On the initial logon screen, you will need to create an account if you don't already have one
1. After logging on, you will be presented with a list of folders.
1. If you don't have any folders:
    - complete the required information in the Create Folder panel on the right
    - the folder will be created and then you can add links to the folder
    - create as many folders a you want based on your preferences
1. Folders have 4 basic operations:
    - __Review__ the links in the folder
        - Selecting a folder will display the links stored in that folder
        - Click on a link to go to the page
    - __Add__ new links to the folder
        - Select the Add Link icon on the folder header pane
        - Copy a link and any descriptive information you may want store regarding the link
    - __Share__ the folder
        - Select the Share icon on the folder header pane for the folder you want to share
        - provide the email address for the person with whom you want to share the folder
        - the person must have an account in LinkSave order fior you to share with them
    - __Delete__ the folder
        - Select the delete icon for the folder you want to delete
        - This action will remove the folder from your list and not affect anyone who also has access to the folder

## Technical Details

This application was built on Node using React with MongoDB as the database using Mongoose as an ODM.

The react-router-dom package was used as the starting point for the application

Axios is used as an HTTP client for the browser and Node.

Express is used for routing.

Passport provides authentication using the local strategy with JWT.

A complete list is found in the __Dependancies__ secton below.

## Dependancies

    "axios": "^0.18.0",
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.18.3",
    "express": "^4.16.3",
    "if-env": "^1.0.4",
    "jsonwebtoken": "^8.3.0",
    "material-ui": "^0.20.1",
    "mongoose": "^5.2.3",
    "passport": "^0.4.0",
    "passport-local": "^1.0.0",
    "path": "^0.12.7",
    "react-tap-event-plugin": "^3.0.3",
    "validator": "^10.4.0",
    "xmlhttprequest": "^1.8.0"

## Installation

1. Clone repository linksave from [https://github.com/eawest2/LinkSaver](https://github.com/eawest2/LinkSaver)
1. Open a terminal session for the directory where the application was cloned to
1. Run `yarn install` to initialize the application. This only needs to be one time.
1. Initiate standard MongoDB instance using mongod
1. Run `yarn start` to start the application
1. The app will open in your default browser
1. Since you wiull be runiing locally, the database will not contain any data initially
1. Create an account from the initial logon screen
1. Once you have successfully logged on, create a folder and assign links

## Database

1. This application uses MongoDB
1. There are 2 collections:
- folders
    - contains all folders data
    - links are stored as an collection/array
    - users assigned to a folder are stored as an Objectid references

``` javascript
    name: { type: String, required: true },
    description: { type: String, required: true },
    links:[{ 
        url: { type: String },
        description: { type: String },
        searchTerm: { type: String }
    }],
    users:[{ type: mongoose.Schema.Types.ObjectId,ref: 'User'}]
```
``` ```


- users
    - contains all user data
    - user data includes the encrypted password provided by Passport
    - folders assigned to a user are stored as an Objectid references
```
    email: {type: String,index: { unique: true }},
    password: String,
    name: String,
    folders:[{ type: mongoose.Schema.Types.ObjectId,ref: 'Folder' }]
```