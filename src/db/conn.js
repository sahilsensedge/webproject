
// const mongoose =require("mongoose");

// mongoose.connect("mongodb://localhost:27017/students-api",{

// useCreateIndex:true,
// useNewUrlParser:true,
// useUnifiedTopology:true,

// }).then (() =>{
//     console.log(" connection is successfull");
// }).catch((e) =>{
//     console.log("no connection");
// })


// var MongoClient = require('mongodb').MongoClient;
// //Create a database named "mydb":
// var url = "mongodb://localhost:27017/students-api";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });


// const dbConfig = require('./db/conn.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect("mongodb://localhost:27017/students-api", {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

