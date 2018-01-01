const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const cors = require('cors');
const path = require('path');

var users = require('./routes/api/users.routes');
var artists = require('./routes/api/artists.routes');
var albums = require('./routes/api/albums.routes');
var tracks = require('./routes/api/tracks.routes');
var blogposts = require('./routes/api/blogposts.routes');

// allow CORS
// var originsWhitelist = [
//   'http://localhost:4200',
//   'http://www.myproductionurl.com'
// ];
// var corsOptions = {
//   origin: function (origin, callback) {
//     var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
//     callback(null, isWhitelisted);
//   },
//   credentials: true
// };

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// allow CORS
// app.use(cors(corsOptions));

// Create link to Angular build directory
var distDir = path.join(__dirname + "/dist");
app.use(express.static(distDir));

// api routes
app.use('/api/users', users);
app.use('/api/artists', artists);
app.use('/api/albums', albums);
app.use('/api/tracks', tracks);
app.use('/api/blogposts', blogposts);

// send all other requests to angular app
app.get('*', (req, res) => {
  res.sendFile('dist/index.html', { root: __dirname});
});

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
// mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
app.mongodb = mongodb;

mongodb.MongoClient.connect('mongodb://heroku_pn25zh65:jll4fsplia7tc0bjjg8q5sg299@ds119486.mlab.com:19486/heroku_pn25zh65', function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  app.db = database;
  // db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({ "error": message });
}