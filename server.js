// // import express module using require and store it in const variable named express
// const express = require('express')

// // creating an object of express module
// const app = express()

// // importing path module
// // It provides utilities for working with file and directory paths
// const path = require("path");

// // import routes.js file in server.js file
// // The routes.js is reponsible for routes of the response view as output
// const routes = require("./routes");

// // for mongodb 

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');
// const db = mongoose.connection;

// db.once('open', function(){
//     console.log("Connected to MongoDB successfully!");
//    });
//    db.on('error', function(){
//     console.log(err);
//    }); 
// // Adding Bootstrap css path
// app.use(
// "/css",
// express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
// );
// // Adding Bootstrap js path
// app.use(
// "/js",
// express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
// );
// // Adding Jquery path in node_modules
// app.use(
// "/js",
// express.static(path.join(__dirname, "node_modules/jquery/dist"))
// );

// // this is one of the methods used in routing
// // the other important method is called post
// // this app.get() handles get request
// // it takes two parameters first one is the path
// // "/" denotes homepage 
// // the second parameter is the function which also takes
// // two parameters one is request and resopnse
// // in the function we are calling the send method of response 
// // This displays the message in the homepage
// // app.get('/', (req, res) => res.send('This is Akshat from department of Information Technology at GNDEC'))


// // The app.use() function is used to mount the specified middleware function() at the path which is being specified.
// // app.use(path, callback)
// app.use("/", routes);



// // app.listen() used to listen connections on specified port
// app.listen(3000, () => console.log('Server running http://localhost:3000'))

// 7th practical starts from here

// modules =================================================
const express = require('express');
const app = express();
var mongoose = require('mongoose');
//var methodOverride = require('method-override');
// set our port
const port = 7000;
// configuration ===========================================

// override with the X-HTTP-Method-Override header in the request.
//app.use(methodOverride('X-HTTP-Method-Override')); //simulate DELETE/PUT

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));


// config files
// var db = require('./config/db');
// console.log("connecting--",db);
// mongoose.connect(db.url); //Mongoose connection created

// frontend routes =========================================================
//app.get('/', (req, res) => res.send('Welcome to Mean Project!'));

//defining route
//app.get('/tproute', function (req, res) {
  // res.send('This is routing for the application developed using Node and Express...');
//});

// sample api route
// grab the student model we just created
// var Student = require('./app/models/student');
app.get('/api/students', function(req, res) {
   // use mongoose to get all students in the database
   Student.find(function(err, students) {
      // if there is an error retrieving, send the error.
      // nothing after res.send(err) will execute
      if (err)
         res.send(err);
      res.json(students); // return all students in JSON format
   });
});



// startup our app at http://localhost:3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`));




