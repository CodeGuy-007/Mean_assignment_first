// import express module using require and store it in const variable named express
const express = require('express')

// creating an objeact of express module
const app = express()

// importing path module
// It provides utilities for working with file and directory paths
const path = require("path");

// import routes.js file in server.js file
// The routes.js is reponsible for routes of the response view as output
const routes = require("./routes");

// Adding Bootstrap css path
app.use(
"/css",
express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
// Adding Bootstrap js path
app.use(
"/js",
express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);
// Adding Jquery path in node_modules
app.use(
"/js",
express.static(path.join(__dirname, "node_modules/jquery/dist"))
);

// this is one of the methods used in routing
// the other important method is called post
// this app.get() handles get request
// it takes two parameters first one is the path
// "/" denotes homepage 
// the second parameter is the function which also takes
// two parameters one is request and resopnse
// in the function we are calling the send method of response 
// This displays the message in the homepage
// app.get('/', (req, res) => res.send('This is Akshat from department of Information Technology at GNDEC'))


// The app.use() function is used to mount the specified middleware function() at the path which is being specified.
// app.use(path, callback)
app.use("/home", routes);



// app.listen() used to listen connections on specified port
app.listen(3000, () => console.log('Server running http://localhost:3000'))




