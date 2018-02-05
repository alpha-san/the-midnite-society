import * as express from 'express';
import * as bodyParser from "body-parser";
import * as path from 'path';

import * as users from './routes/api/users.routes';
let artists = require('./routes/api/artists.routes');
let albums = require('./routes/api/albums.routes');
let tracks = require('./routes/api/tracks.routes');
let blogposts = require('./routes/api/blogposts.routes');
let mongoose = require('mongoose');

// load environment variables
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Create link to Angular build directory
// let distDir = path.join(__dirname + "/client-dist");
let distDir = path.join(__dirname + "../../../client/dist");
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
  res.sendFile('index.html', { root: rootDir });
});

// mongoose.connect(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI);
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB server connection error'));
db.once('open', function() {
  app.db = db;
  app.mongoose = mongoose;
  console.log('Database connection ready')

  // Initialize app
  let server = app.listen(process.env.PORT || 8080, function() {
    let port = server.address().port;
    console.log('App now running on port', port);
  });
});
