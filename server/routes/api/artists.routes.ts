import { logSuccess, handleError, ARTISTS_COLLECTION, ALBUMS_COLLECTION } from '../common';

const express = require('express');
const router = express.Router();

export {};

router.get("/", (req, res) => {
  console.log('GET', req);

  let db = req.app.db;
  db.collection(ARTISTS_COLLECTION)
    .aggregate([
      {
        $lookup: {
          from: ALBUMS_COLLECTION,
          localField: "_id",
          foreignField: "artist_id",
          as: "albums"
        }
      }
    ])
    .toArray((err, docs) => {
      if (err) handleError(res, err.message, "Failed to get albums for artists", 500);
      logSuccess(docs);
      return res.status(200).json(docs);
    });
});

router.post("/", (req, res) => {
  let newContact = req.body;
  newContact._id = req.app.mongoose.Types.ObjectId();
  newContact.artistUrl = newContact.artistName.toLowerCase().replace(/ /g,'');

  // validation error checking here
  //   if (!req.body.name) {
  //     handleError(res, "Invalid artist input", "Must provide a name.", 400);
  //   }

  req.app.db.collection(ARTISTS_COLLECTION).insertOne(newContact, (err, doc) => {
    if (err) {
      handleError(res, err.message, "Failed to create new artist.", 500);
    } else {
      logSuccess(doc.ops[0]);
      res.status(201).json(doc.ops[0]);
    }
  });
});

router.get("/:id", (req, res) => {
});

router.put("/:id", (req, res) => {
  let updatedArtist = req.body,
    updatedArtistId = req.body._id;

  req.app.db.collection(ARTISTS_COLLECTION).updateOne(
    { "_id": new req.app.mongoose.Types.ObjectId(updatedArtistId) },
    {
      $set: acceptedArgs(updatedArtist)
    }, (err, doc) => {
      if (err) { handleError(res, err.message, "Failed to update artist", 500); }
      else {
        logSuccess(updatedArtist);
        res.status(201).json(updatedArtist);
      }
    });
});

router.delete("/:id", (req, res) => {
  req.app.db.collection(ARTISTS_COLLECTION).remove({ _id: new req.app.mongoose.Types.ObjectId(req.params.id) }, (err, doc) => {
    if (err) handleError(res, err.message, "Failed to delete artist.", 500);
    else res.status(201);
  });
});

function acceptedArgs(updatedArtist) {
  return {
    "firstName": updatedArtist.firstName,
    "lastName": updatedArtist.lastName,
    "details": updatedArtist.details,
    "email": updatedArtist.email,
    "phone": updatedArtist.phone,
    "artistUrl": updatedArtist.artistUrl,
    "artistName": updatedArtist.artistName,
    "soundcloudUrl": updatedArtist.soundcloudUrl,
    "twitterUrl": updatedArtist.twitterUrl,
    "facebookUrl": updatedArtist.facebookUrl,
    "instagramUrl": updatedArtist.instagramUrl,
    "youtubeUrl": updatedArtist.youtubeUrl,
    "snapchatUrl": updatedArtist.snapchatUrl,
    "tagLine": updatedArtist.tagLine,
    "biography": updatedArtist.biography,
    "isAdmin:": updatedArtist.isAdmin
  };
}

module.exports = router;
