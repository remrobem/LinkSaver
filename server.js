const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");

const passport = require('passport');
const config = require('./config');

const app = express();
const PORT = process.env.PORT || 3001;

// tell the app to look for static files in these directories
if(process.env.NODE_ENV==="production"){
  app.use(express.static('./client/build/'));
}

// pass the passport middleware
app.use(passport.initialize());
// load passport strategies
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// pass the authenticaion checker middleware
const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);
// routes
const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);




// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// app.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// })



app.use(routes);

var databaseUri = "mongodb://localhost/linksaver";

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(databaseUri);
}

mongoose.Promise = global.Promise;

mongoose.connection.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

mongoose.connection.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});