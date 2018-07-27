const router = require("express").Router();
const folderRoutes = require("./folders");

console.log(`in index.js for folders`)
router.use("/folders", folderRoutes);

module.exports = router;