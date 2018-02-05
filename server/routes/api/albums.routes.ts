import { logSuccess, handleError, ALBUMS_COLLECTION } from '../common';

const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  req.app.db.collection(ALBUMS_COLLECTION).find({}).toArray((err, docs) => {
    if (err)
      handleError(res, err.message, "Failed to get albums", 500);
    else {
      res.status(200).json(docs);
      logSuccess('GET', docs);
    }
  });
});

router.post("/", (req, res) => {
  var newAlbum = req.body;
  newAlbum.artistId = req.app.mongoose.Types.ObjectId(newAlbum.artistId);

  req.app.db.collection(ALBUMS_COLLECTION).insertOne(newAlbum, (err, doc) => {
    if (err)
      handleError(res, err.message, "Failed to create new album.", 500);
    else {
      res.status(201).json(doc.ops[0]);
      logSuccess('POST', doc.ops[0]);
    }
  });
});

router.get("/:id", (req, res) => { });

router.put("/:id", (req, res) => {
  var updatedAlbum = req.body;

  req.app.db.collection(ALBUMS_COLLECTION).findOneAndUpdate(
    {"_id": new req.app.mongoose.Types.ObjectId(updatedAlbum._id)},
    {
      $set: acceptedArgs(updatedAlbum)
    }, err => {
      if (err) handleError(res, err.message, "Failed to update albums", 500);
      logSuccess('PUT', updatedAlbum);
  });
});

router.delete("/:id", (req, res) => {
  req.app.db.collection(ALBUMS_COLLECTION).remove(
    { _id: new req.app.mongoose.Types.ObjectId(req.params.id) },
    (err, doc) => {
      if (err) {
        handleError(res, err.message, "Failed to delete album.", 500);
      } else {
        logSuccess(doc);
        res.status(201);
      }
  })
});

function acceptedArgs(updatedAlbum) {
  return {
    "name": updatedAlbum.name,
    "artistId": updatedAlbum.artistId,
    "albumImageUrl": updatedAlbum.albumImageUrl,
    "description": updatedAlbum.description,
    "soundcloudUrl": updatedAlbum.soundcloudUrl,
    "youtubeUrl": updatedAlbum.youtubeUrl
  };
}

module.exports = router;
