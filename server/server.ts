import * as express from 'express';
import * as bodyParser from "body-parser";
import * as path from 'path';

var users = require('./routes/api/users.routes');
var artists = require('./routes/api/artists.routes');
var albums = require('./routes/api/albums.routes');
var tracks = require('./routes/api/tracks.routes');
var blogposts = require('./routes/api/blogposts.routes');
var mongoose = require('mongoose');

// load environment variables
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Create link to Angular build directory
// let distDir = path.join(__dirname + "/client-dist");
let distDir = path.join(__dirname + "../../../client/dist");
console.log('distDir= ', distDir);
app.use(express.static(distDir));

// api routes
app.use('/api/users', users);
app.use('/api/artists', artists);
app.use('/api/albums', albums);
app.use('/api/tracks', tracks);
app.use('/api/blogposts', blogposts);

// send all other requests to angular app
app.get('*', (req, res) => {
  // let rootIndexFile = 'dist/client-dist/index.html';
  // let rootDir = __dirname + '/client-dist';
  let rootIndexFile = '../../client/dist/index.html';
  let rootDir = path.join(__dirname + '../../../client/dist');
  console.log('rootDir=', rootDir);
  res.sendFile('index.html', { root: rootDir });
});

mongoose.connect(process.env.MONGODB_URI);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB server connection error'));
db.once('open', function() {
  app.db = db;
  console.log('Database connection ready')

  // Initialize app
  var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log('App now running on port', port);
  });
});

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({ "error": message });
}