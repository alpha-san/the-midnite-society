const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");

var ObjectID = mongodb.ObjectID;
var USERS_COLLECTION = "users";
var ARTISTS_COLLECTION = "artists";
var ALBUMS_COLLECTION = "albums";
var TRACK_COLLECTION = "tracks";
var BLOGPOST_COLLECTION = "blogPosts";

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
// mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
mongodb.MongoClient.connect('mongodb://heroku_pn25zh65:jll4fsplia7tc0bjjg8q5sg299@ds119486.mlab.com:19486/heroku_pn25zh65', function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// CONTACTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
  }
  
  /*  "/api/contacts"
   *    GET: finds all contacts
   *    POST: creates a new contact
   */
  
  app.get("/api/users", function(req, res) {
    db.collection(USERS_COLLECTION).find({}).toArray(function(err, docs) {
        if (err) {
          handleError(res, err.message, "Failed to get users.");
        } else {
          res.status(200).json(docs);
        }
      });
  });
  
  app.post("/api/users", function(req, res) {
    var newContact = req.body;
    
      if (!req.body.name) {
        handleError(res, "Invalid user input", "Must provide a name.", 400);
      }
    
      db.collection(USERS_COLLECTION).insertOne(newContact, function(err, doc) {
        if (err) {
          handleError(res, err.message, "Failed to create new user.");
        } else {
          res.status(201).json(doc.ops[0]);
        }
      });
  });
  
  /*  "/api/user/:id"
   *    GET: find user by id
   *    PUT: update user by id
   *    DELETE: deletes user by id
   */
  
  app.get("/api/users/:id", function(req, res) {
  });
  
  app.put("/api/users/:id", function(req, res) {
  });
  
  app.delete("/api/users/:id", function(req, res) {
  });