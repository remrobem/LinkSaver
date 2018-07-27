const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/linksaver"),
  { useNewUrlParser: true };

const userSeed = [
  {
    email: "user1@dummy.com",
    name: "User One",
    password: "test1234"
  },
  {
    email: "user2@dummy.com",
    name: "User Two",
    password: "test1234"
  },
  {
    email: "user3@dummy.com",
    name: "User Three",
    password: "test1234"
  },
  {
    email: "user4@dummy.com",
    name: "User Four",
    password: "test1234"
  }
];


const folderSeed = [
  {
    name: "Node forEach",
    description: "Node forEach links",
    links: [
      {
        url:
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",
        description: "MDN forEach"
      },
      {
        url:
          "https://coderwall.com/p/kvzbpa/don-t-use-array-foreach-use-for-instead",
        description: "are for loops more efficient than forEach loops?"
      }
    ]
  },
  {
    name: "Style Guides",
    description: "Style Guides to be used for projects",
    links: [
      {
        url: "http://arkusnexus.com/2016/09/12/coding-guidelines-mongodb/",
        description: "MongoDB Style Guide",
        searchTerm: "mongodb guidelines"
      },
      {
        url: "https://github.com/airbnb/javascript/blob/master/README.md",
        description: "AirBnB Javascript Style Guide",
        searchTerm: "airbnb guidelines"
      },
      {
        url: "https://github.com/airbnb/javascript/tree/master/react",
        description: "AirBnB React Style Guide",
        searchTerm: "react master airbnb"
      }
    ]
  }
];

// Add users
db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    let userIds = data.insertedIds;
    // console.log(userIds);
    console.log(`${data.insertedCount} User records inserted`);

    // // add folders

    db.Folder.remove({})
      .then(() => db.Folder.collection.insertMany(folderSeed))
      .then(data => {
        let folderIds = data.insertedIds;
        console.log(folderIds);
        console.log(`${data.insertedCount} Folder records inserted`);
        process.exit(0);

        //  add user assignments to folders. 
        // Build array of entries for any combinations needed based on the users and folders inserted above

        // db.UserFolder.remove({})
        //   .then(() => {
        //     console.log(`userids:`)
        //     console.log(JSON.stringify(userIds));
        //     console.log(`folderids:`);
        //       console.log(JSON.stringify(folderIds));
        //     let userFolderArr = [];
        //     userFolderArr.push({
        //       user_id: userIds."0",
        //       folder_id: folderIds[0],
        //       read_access: true,
        //       update_access: true
        //     });
        //     userFolderArr.push({
        //       user_id: userIds[1],
        //       folder_id: folderIds[1],
        //       read_access: true,
        //       update_access: true
        //     });
        //     userFolderArr.push({
        //       user_id: userIds[2],
        //       folder_id: folderIds[0],
        //       read_access: true,
        //       update_access: true
        //     });
        //     userFolderArr.push({
        //       user_id: userIds[2],
        //       folder_id: folderIds[1],
        //       read_access: true,
        //       update_access: true
        //     });
        //     console.log(userFolderArr);

        //     db.UserFolder.collection.insertMany(userFolderArr)
        //     .then(data => {
        //       // console.log(folderIds);
        //       console.log(`${data.insertedCount} User Folder records inserted`);
        //       process.exit(0);
        //     });
        //   })
      });
  })

  .catch(err => {
    console.error(err);
    process.exit(1);
  });


