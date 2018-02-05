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
  newAlbum.artist_id = req.app.mongoose.Types.ObjectId(newAlbum.artist_id);

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
    {_id: updatedAlbum._id},
    updatedAlbum,
    { upsert: true }, err => {
    if (err) handleError(res, err.message, "Failed to update albums", 500);
    logSuccess('PUT', updatedAlbum);
  });
});

router.delete("/:id", (req, res) => {
  req.app.db.collection(ALBUMS_COLLECTION).remove(
    { _id: new req.app.mongodb.ObjectId(req.params.id) },
    (err, doc) => {
      if (err)
        handleError(res, err.message, "Failed to delete album.", 500);
      else {
        logSuccess(doc);
        res.status(201);
      }
  })
});

module.exports = router;
