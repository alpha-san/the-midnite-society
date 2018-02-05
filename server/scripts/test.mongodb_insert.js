var mongoose = require('mongoose');
var mongodbUri = 'mongodb://localhost/themidnitesociety';
var ARTIST_COLLECTION = "artists";

mongoose.connect(mongodbUri);
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB server connection error'));
db.once('open', function() {
  console.log('Database connection ready');

  var testArtist = {
    firstName: 'what',
    lastName: 'what',
    details: 'what',
    email: 'what',
    phone: 'what',
    artistUrl: 'what',
    artistName: 'what',
    soundcloudUrl: 'what',
    twitterUrl: 'what',
    facebookUrl: 'what',
    instagramUrl: 'what',
    youtubeUrl: 'what',
    snapchatUrl: 'what',
    tagLine: 'what',
    biography: 'what',
    isAdmin: false
  }

  testArtist._id = mongoose.Types.ObjectId();

  db.collection(ARTIST_COLLECTION).insertOne(testArtist, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new artist.", 500);
    } else {
      logSuccess(doc.ops[0]);
    }
  });

});

function logSuccess (document, method = null) {
  console.log(`Success for ${method}, doc:`, document);
}

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({ "error": message });
}
