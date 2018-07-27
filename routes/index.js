const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");


console.log(`in index.js for api`)
// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;





// // export { default } from "./routes.js";


// const router = require("express").Router();
// const routesRoutes = require("./routes");

// // beer routes
// router.use("/routes", routesRoutes);

// module.exports = router;