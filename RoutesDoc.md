## /createFolder

* http://localhost:3000/api/folders/createFolder/
* POST
* req.body:
    * {name: "name of the folder", description: "description of the folder" }

## /addLink

* http://localhost:3000/api/folders/addLink/
* POST
* req.body:
    * { url: "http://theurl.com", description: "link description", searchTerm: "search term used", folder_id: _id of the folder to add link to }

## /addUser

* http://localhost:3000/api/folders/addUser
* POST
* req.body:
    * { name: "John Smith", email: "john_smith@abcd.com" }

## /returnUserFolders/:userId

* http://localhost:3000/api/folders/returnUserFolders/5b5aab9c2c944f37094ec0ac
* GET
* Parameter is the _id for the user
```javascript
{
    "folders": [
        {
            "users": [
                "5b5ca073675e0419b7ed29e4"
            ],
            "_id": "5b5ca073675e0419b7ed29e7",
            "name": "Node forEach",
            "description": "Node forEach links",
            "links": [
                {
                    "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",
                    "description": "MDN forEach"
                },
                {
                    "url": "https://coderwall.com/p/kvzbpa/don-t-use-array-foreach-use-for-instead",
                    "description": "are for loops more efficient than forEach loops?"
                }
            ]
        },
        {
            "users": [
                "5b5ca073675e0419b7ed29e4",
                "5b5ca073675e0419b7ed29e5"
            ],
            "_id": "5b5ca073675e0419b7ed29e8",
            "name": "Style Guides",
            "description": "Style Guides to be used for projects",
            "links": [
                {
                    "url": "http://arkusnexus.com/2016/09/12/coding-guidelines-mongodb/",
                    "description": "MongoDB Style Guide",
                    "searchTerm": "mongodb guidelines"
                },
                {
                    "url": "https://github.com/airbnb/javascript/blob/master/README.md",
                    "description": "AirBnB Javascript Style Guide",
                    "searchTerm": "airbnb guidelines"
                },
                {
                    "url": "https://github.com/airbnb/javascript/tree/master/react",
                    "description": "AirBnB React Style Guide",
                    "searchTerm": "react master airbnb"
                }
            ]
        }
    ],
    "_id": "5b5ca073675e0419b7ed29e4",
    "email": "user2@dummy.com",
    "name": "User Two",
    "password": "test1234"
}
```

## /addFolderToUser

* http://localhost:3000/api/folders/addFolderToUser
* POST
* req.body:
    * { folder_id: _id of folder, user_id: _id of user }

## /deleteFolder

* http://localhost:3000/api/folders/deleteFolder/:folderId
* POST
* req.body
    * { folder_id: _id of folder }


## /deleteUser

* http://localhost:3000/api/folders/deleteUser/:userId
* DELETE

## /deleteUserFolder/5b5b494ae6e88a4d53696152/5b5b494ae6e88a4d53696154

* http://localhost:3000/api/folders/deleteUserFolder
* POST
* req.body:
    * { folder_id: _id of folder, user_id: _id of user }

## /deleteLink

* http://localhost:3000/api/folders/deleteLink
* POST
* req.body:
    * { folder_id: _id of the folder, url: "url to be deleted"}

## /returnAllFolders

* http://localhost:3000/api/folders/returnAllFolders/
* GET
* no parameters