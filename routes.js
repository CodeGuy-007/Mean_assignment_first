// importing Router module of express and storing in variable named router
const router = require("express").Router();

// importing path module
// It provides utilities for working with file and directory paths
const path = require("path");

// The router.get() function routes the HTTP GET Requests to the path which is being specified with the callback function
// When we go to specified route it will show a index.html file
// But since we are demonstrating res.send() function in the server.js therefore we will not display index.html

// router.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./views/index.html"));
// });


// this get function will be called when we go to http://localhost:3000/about and will display about.html file
// note that here we are using sendFile function insteat of send function used in server.js
router.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/about.html"));
});

// this get function will be called when any route other than specified route will be accessed and will display error.html file
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/error.html"));
});

// exporting router so it can be used in server.js
module.exports = router;