"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../common");
var express = require('express');
var router = express.Router();
router.get("/", function (req, res) {
    req.app.db.collection(common_1.TRACKS_COLLECTION).find({}).toArray(function (err, docs) {
        if (err) {
            common_1.handleError(res, err.message, "Failed to get tracks", 500);
        }
        else {
            res.status(200).json(docs);
        }
    });
});
router.post("/", function (req, res) {
    var newTrack = req.body;
    req.app.db.collection(common_1.TRACKS_COLLECTION).insertOne(newTrack, function (err, doc) {
        if (err) {
            common_1.handleError(res, err.message, "Failed to create new track.", 500);
        }
        else {
            res.status(201).json(doc.ops[0]);
        }
    });
});
router.get("/:id", function (req, res) {
});
router.put("/:id", function (req, res) {
    var updatedTrack = req.body;
    req.app.db.collection(common_1.TRACKS_COLLECTION).updateOne({ "_id": new req.app.mongoose.Types.ObjectId(updatedTrack._id) }, {
        $set: acceptedArgs(updatedTrack)
    }, function (err, doc) {
        if (err) {
            common_1.handleError(res, err.message, "Failed to update artist", 500);
        }
        else {
            common_1.logSuccess(updatedTrack);
            res.status(201).json(updatedTrack);
        }
    });
});
router.delete("/:id", function (req, res) {
    req.app.db.collection(common_1.TRACKS_COLLECTION).remove({ _id: new req.app.mongoose.Types.ObjectId(req.params.id) }, function (err, doc) {
        if (err) {
            common_1.handleError(res, err.message, "Failed to delete track.", 500);
        }
        else {
            res.status(201);
        }
    });
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
//# sourceMappingURL=tracks.routes.js.map