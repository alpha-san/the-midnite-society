"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var users = require("./routes/api/users.routes");
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
var distDir = path.join(__dirname + "../../../client/dist");
app.use(express.static(distDir));
// api routes
app.use('/api/users', users);
app.use('/api/artists', artists);
app.use('/api/albums', albums);
app.use('/api/tracks', tracks);
app.use('/api/blogposts', blogposts);
// send all other requests to angular app
app.get('*', function (req, res) {
    // let rootIndexFile = 'dist/client-dist/index.html';
    // let rootDir = __dirname + '/client-dist';
    var rootIndexFile = '../../client/dist/index.html';
    var rootDir = path.join(__dirname + '../../../client/dist');
    res.sendFile('index.html', { root: rootDir });
});
// mongoose.connect(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB server connection error'));
db.once('open', function () {
    app.db = db;
    app.mongoose = mongoose;
    console.log('Database connection ready');
    // Initialize app
    var server = app.listen(process.env.PORT || 8080, function () {
        var port = server.address().port;
        console.log('App now running on port', port);
    });
});
//# sourceMappingURL=server.js.map