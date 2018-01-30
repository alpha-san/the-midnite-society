var express = require('express');
var router = express.Router();

const ALBUMS_COLLECTION = "albums";

// ALBUM API ROUTES BELOW

router.get("/", function (req, res) {
  req.app.db.collection(ALBUMS_COLLECTION).find({}).toArray(function (err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get albums", 500);
    } else {
      res.status(200).json(docs);
    }
  });
});

router.post("/", function (req, res) {
  var newAlbum = req.body;
  console.log('POST: ', newAlbum);
  newAlbum.artist_id = req.app.mongoose.Types.ObjectId(newAlbum.artist_id);

  // validation error checking here
  //   if (!req.body.name) {
  //     handleError(res, "Invalid user input", "Must provide a name.", 400);
  //   }

  req.app.db.collection(ALBUMS_COLLECTION).insertOne(newAlbum, function (err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new album.", 500);
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

router.get("/:id", function (req, res) {
});

router.put("/:id", function (req, res) {
  var updatedAlbum = req.body;
  console.log('server:put updateAlbum', updatedAlbum);

  // req.app.db.collection(ALBUMS_COLLECTION).updateOne(
  //   { "_id": new req.app.mongodb.ObjectId(updatedAlbum._id) },
  //   { $set: updatedAlbum },
  //   function (err, doc) {
  //     if (err) {
  //       console.log('error', err);
  //       handleError(res, err.message, "Failed to update album");
  //     } else {
  //       res.status(201).json(doc.ops);
  //     }
  //   });

  req.app.db.collection(ALBUMS_COLLECTION).findOneAndUpdate({_id: updatedAlbum._id}, updatedAlbum, {upsert: true}, function(err) {
    if (err) console.log('error', err);
    console.log('saved');
  });
});

router.delete("/:id", function (req, res) {
  req.app.db.collection(ALBUMS_COLLECTION).remove({ _id: new req.app.mongodb.ObjectId(req.params.id) }, function (err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to delete album.", 500);
    } else {
      // res.status(201).json(doc.ops[0]);
      res.status(201);
    }
  })
});

module.exports = router;
