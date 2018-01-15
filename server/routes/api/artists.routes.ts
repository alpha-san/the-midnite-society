var express = require('express');
var router = express.Router();

const ARTISTS_COLLECTION = "artists";

// ARTISTS ROUTES BELOW

router.get("/", function (req, res) {
  req.app.db.collection(ARTISTS_COLLECTION).find({}).toArray(function (err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get artists.", 500);
    } else {
      res.status(200).json(docs);
    }
  });
});

router.post("/", function (req, res) {
  var newContact = req.body;
  newContact._id = req.app.mongoose.Types.ObjectId();
  newContact.artistUrl = newContact.artistName.toLowerCase().replace(/ /g,'');
  console.log('before post', newContact);

  // validation error checking here
  //   if (!req.body.name) {
  //     handleError(res, "Invalid artist input", "Must provide a name.", 400);
  //   }

  req.app.db.collection(ARTISTS_COLLECTION).insertOne(newContact, function (err, doc) {
    console.log('newArtist', newContact);
    if (err) {
      handleError(res, err.message, "Failed to create new artist.", 500);
    } else {
      console.log('success');
      res.status(201).json(doc.ops[0]);
    }
  });
  // mongoose.Types.ObjectId();
});

router.get("/:id", function (req, res) {
});

router.put("/:id", function (req, res) {
  var updatedArtist = req.body;
  console.log('server.js:put', updatedArtist);

  req.app.db.collection(ARTISTS_COLLECTION).updateOne(
    { "_id": new req.app.mongoose.Types.ObjectId(updatedArtist._id) },
    {
      $set:
        {
          "firstName": updatedArtist.firstName
        }
    },
    { $set: updatedArtist },
    function (err, doc) {
      if (err) {
        console.log('Failed to update artist', err);
        handleError(res, err.message, "Failed to update artist", 500);
      } else {
        console.log('success?', doc.ops);
        res.status(201).json(doc.ops);
      }
    });
});

router.delete("/:id", function (req, res) {
  req.app.db.collection(ARTISTS_COLLECTION).remove({ _id: new req.app.mongoose.Types.ObjectId(req.params.id) }, function (err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to delete artist.", 500);
    } else {
      // res.status(201).json(doc.ops[0]);
      res.status(201);
    }
  })
});

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({ "error": message });
}

module.exports = router;