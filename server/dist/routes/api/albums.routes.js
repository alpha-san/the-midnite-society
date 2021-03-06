"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../common");
var express = require('express');
var router = express.Router();
router.get("/", function (req, res) {
    req.app.db.collection(common_1.ALBUMS_COLLECTION).find({}).toArray(function (err, docs) {
        if (err)
            common_1.handleError(res, err.message, "Failed to get albums", 500);
        else {
            res.status(200).json(docs);
            common_1.logSuccess('GET', docs);
        }
    });
});
router.post("/", function (req, res) {
    var newAlbum = req.body;
    newAlbum.artistId = req.app.mongoose.Types.ObjectId(newAlbum.artistId);
    req.app.db.collection(common_1.ALBUMS_COLLECTION).insertOne(newAlbum, function (err, doc) {
        if (err)
            common_1.handleError(res, err.message, "Failed to create new album.", 500);
        else {
            res.status(201).json(doc.ops[0]);
            common_1.logSuccess('POST', doc.ops[0]);
        }
    });
});
router.get("/:id", function (req, res) { });
router.put("/:id", function (req, res) {
    var updatedAlbum = req.body;
    req.app.db.collection(common_1.ALBUMS_COLLECTION).findOneAndUpdate({ "_id": new req.app.mongoose.Types.ObjectId(updatedAlbum._id) }, {
        $set: acceptedArgs(updatedAlbum)
    }, function (err) {
        if (err)
            common_1.handleError(res, err.message, "Failed to update albums", 500);
        common_1.logSuccess('PUT', updatedAlbum);
    });
});
router.delete("/:id", function (req, res) {
    req.app.db.collection(common_1.ALBUMS_COLLECTION).remove({ _id: new req.app.mongoose.Types.ObjectId(req.params.id) }, function (err, doc) {
        if (err) {
            common_1.handleError(res, err.message, "Failed to delete album.", 500);
        }
        else {
            common_1.logSuccess(doc);
            res.status(201);
        }
    });
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
//# sourceMappingURL=albums.routes.js.map