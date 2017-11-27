const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const cors = require('cors');

var ObjectID = mongodb.ObjectID;
var USERS_COLLECTION = "users";
var ARTISTS_COLLECTION = "artists";
var ALBUMS_COLLECTION = "albums";
var TRACKS_COLLECTION = "tracks";
var BLOGPOST_COLLECTION = "blogPosts";

// allow CORS
var originsWhitelist = [
  'http://localhost:4200',
  'http://www.myproductionurl.com'
];
var corsOptions = {
  origin: function (origin, callback) {
    var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
    callback(null, isWhitelisted);
  },
  credentials: true
};

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// app.use(express.static(__dirname + '/dist/favicon.ico'));
// app.use(express.static(__dirname + '/dist/inline.bundle.js'));
// app.use(express.static(__dirname + '/dist/main.bundle.js'));
// app.use(express.static(__dirname + '/dist/polyfills.bundle.js'));
// app.use(express.static(__dirname + '/dist/styles.bundle.js'));
// app.use(express.static(__dirname + '/dist/vendor.bundle.js'));
// app.all('*', function(req, res, next){
//   res.sendFile( 'index.html', { root: __dirname + '/dist' });
// });

// allow CORS
app.use(cors(corsOptions));

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


// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({ "error": message });
}

// USER API ROUTES BELOW

/*  "/api/contacts"
 *    GET: finds all contacts
 *    POST: creates a new contact
 */

app.get("/api/users", function (req, res) {
  db.collection(USERS_COLLECTION).find({}).toArray(function (err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get users.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/api/users", function (req, res) {
  var newContact = req.body;

  // validation error checking here
  //   if (!req.body.name) {
  //     handleError(res, "Invalid user input", "Must provide a name.", 400);
  //   }

  db.collection(USERS_COLLECTION).insertOne(newContact, function (err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new user.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

app.get("/api/users/:id", function (req, res) {
});

app.put("/api/users/:id", function (req, res) {
  var updatedUser = req.body;
  console.log('server.js:put', updatedUser);

  db.collection(USERS_COLLECTION).updateOne(
    { "_id": new mongodb.ObjectId(updatedUser._id) },
    {
      $set:
        {
          "firstName": updatedUser.firstName
        }
    },
    { $set: updatedUser },
    function (err, doc) {
      if (err) {
        console.log('Failed to update user', err);
        handleError(res, err.message, "Failed to update user");
      } else {
        console.log('success?', doc.ops);
        res.status(201).json(doc.ops);
      }
    });
});

app.delete("/api/users/:id", function (req, res) {
  db.collection(USERS_COLLECTION).remove({ _id: new mongodb.ObjectId(req.params.id) }, function (err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to delete user.");
    } else {
      // res.status(201).json(doc.ops[0]);
      res.status(201);
    }
  })
});


// ALBUM API ROUTES BELOW

app.get("/api/albums", function (req, res) {
  db.collection(ALBUMS_COLLECTION).find({}).toArray(function (err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get albums");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/api/albums", function (req, res) {
  var newAlbum = req.body;

  // validation error checking here
  //   if (!req.body.name) {
  //     handleError(res, "Invalid user input", "Must provide a name.", 400);
  //   }

  db.collection(ALBUMS_COLLECTION).insertOne(newAlbum, function (err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new album.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

app.get("/api/albums/:id", function (req, res) {
});

app.put("/api/albums/:id", function (req, res) {
  var updatedAlbum = req.body;

  db.collection(ALBUMS_COLLECTION).updateOne(
    { "_id": new mongodb.ObjectId(updatedAlbum._id) },
    { $set: updatedAlbum },
    function (err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to update album");
      } else {
        res.status(201).json(doc.ops);
      }
    });
});

app.delete("/api/albums/:id", function (req, res) {
  db.collection(ALBUMS_COLLECTION).remove({ _id: new mongodb.ObjectId(req.params.id) }, function (err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to delete album.");
    } else {
      // res.status(201).json(doc.ops[0]);
      res.status(201);
    }
  })
});

// TRACK API ROUTES BELOW

app.get("/api/tracks", function (req, res) {
  db.collection(TRACKS_COLLECTION).find({}).toArray(function (err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get tracks");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/api/tracks", function (req, res) {
  var newTrack = req.body;

  // validation error checking here
  //   if (!req.body.name) {
  //     handleError(res, "Invalid user input", "Must provide a name.", 400);
  //   }

  db.collection(TRACKS_COLLECTION).insertOne(newTrack, function (err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new album.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

app.get("/api/tracks/:id", function (req, res) {
});

app.put("/api/tracks/:id", function (req, res) {
  var updatedTrack = req.body;

  db.collection(TRACKS_COLLECTION).updateOne(
    { "_id": new mongodb.ObjectId(updatedTrack._id) },
    { $set: updatedTrack },
    function (err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to update album");
      } else {
        res.status(201).json(doc.ops);
      }
    });
});

app.delete("/api/tracks/:id", function (req, res) {
  db.collection(TRACKS_COLLECTION).remove({ _id: new mongodb.ObjectId(req.params.id) }, function (err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to delete album.");
    } else {
      // res.status(201).json(doc.ops[0]);
      res.status(201);
    }
  })
});