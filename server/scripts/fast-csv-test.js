var fs = require('fs');
var stream = fs.createReadStream("tms-artist-directory.csv");
var csv = require("fast-csv");

var mongoose = require('mongoose');
var mongodbUri = 'mongodb://localhost/themidnitesociety';
var ARTIST_COLLECTION = "artists";

mongoose.connect(mongodbUri);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB server connection error'));
db.once('open', function () {
  console.log('Database connection ready');

  csv
    .fromStream(stream, { headers: true })
    .on("data", function (data) {
      console.log(data);

      var artistToAdd = Object.assign({isAdmin: true}, data);

      artistToAdd._id = mongoose.Types.ObjectId();

      db.collection(ARTIST_COLLECTION).insertOne(artistToAdd, function (err, doc) {
        if (err) {
          handleError(res, err.message, "Failed to create new artist.", 500);
        } else {
          logSuccess(doc.ops[0]);
        }
      });

    })
    .on("end", function () {
      console.log("done");
    });

});

function logSuccess(document, method = null) {
  console.log(`Success for ${method}, doc:`, document);
}

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({ "error": message });
}
