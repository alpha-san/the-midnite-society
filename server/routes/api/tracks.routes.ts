import { logSuccess, handleError, TRACKS_COLLECTION } from '../common';

const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  req.app.db.collection(TRACKS_COLLECTION).find({}).toArray((err, docs) => {
    if (err) {
      handleError(res, err.message, "Failed to get tracks", 500);
    } else {
      res.status(200).json(docs);
    }
  });
});

router.post("/", function (req, res) {
  let newTrack = req.body;

  req.app.db.collection(TRACKS_COLLECTION).insertOne(newTrack, function (err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new track.", 500);
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

router.get("/:id", function (req, res) {
});

router.put("/:id", function (req, res) {
  var updatedTrack = req.body;

  req.app.db.collection(TRACKS_COLLECTION).updateOne(
    { "_id": new req.app.mongoose.Types.ObjectId(updatedTrack._id) },
    {
      $set: acceptedArgs(updatedTrack)
    }, (err, doc) => {
      if (err) { handleError(res, err.message, "Failed to update artist", 500); }
      else {
        logSuccess(updatedTrack);
        res.status(201).json(updatedTrack);
      }
    });
});

router.delete("/:id", function (req, res) {
  req.app.db.collection(TRACKS_COLLECTION).remove({ _id: new req.app.mongoose.Types.ObjectId(req.params.id) },
  (err, doc) => {
    if (err) {
      handleError(res, err.message, "Failed to delete track.", 500);
    } else {
      res.status(201);
    }
  })
});

function acceptedArgs(updatedTrack) {
  return {
    "name": updatedTrack.name,
    "albumId": updatedTrack.albumId,
    "albumNumber": updatedTrack.albumNumber,
    "mainArtistId": updatedTrack.mainArtistId,
    "artistsIds: ": updatedTrack.artistsIds,
    "soundcloudUrl": updatedTrack.soundcloudUrl,
    "youtubeUrl": updatedTrack.youtubeUrl,
    "trackImageUrl": updatedTrack.trackImageUrl,
    "description": updatedTrack.description
  };
}

module.exports = router;
