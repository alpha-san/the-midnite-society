"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../common");
var express = require('express');
var router = express.Router();
router.get("/", function (req, res) {
    console.log('GET', req);
    var db = req.app.db;
    db.collection(common_1.ARTISTS_COLLECTION)
        .aggregate([
        {
            $lookup: {
                from: common_1.ALBUMS_COLLECTION,
                localField: "_id",
                foreignField: "artistId",
                as: "albums"
            }
        }
    ])
        .toArray(function (err, docs) {
        if (err)
            common_1.handleError(res, err.message, "Failed to get albums for artists", 500);
        common_1.logSuccess(docs);
        return res.status(200).json(docs);
    });
});
router.post("/", function (req, res) {
    var newContact = req.body;
    newContact._id = req.app.mongoose.Types.ObjectId();
    newContact.artistUrl = newContact.artistName.toLowerCase().replace(/ /g, '');
    // validation error checking here
    //   if (!req.body.name) {
    //     handleError(res, "Invalid artist input", "Must provide a name.", 400);
    //   }
    req.app.db.collection(common_1.ARTISTS_COLLECTION).insertOne(newContact, function (err, doc) {
        if (err) {
            common_1.handleError(res, err.message, "Failed to create new artist.", 500);
        }
        else {
            common_1.logSuccess(doc.ops[0]);
            res.status(201).json(doc.ops[0]);
        }
    });
});
router.get("/:id", function (req, res) {
});
router.put("/:id", function (req, res) {
    var updatedArtist = req.body, updatedArtistId = req.body._id;
    req.app.db.collection(common_1.ARTISTS_COLLECTION).updateOne({ "_id": new req.app.mongoose.Types.ObjectId(updatedArtistId) }, {
        $set: acceptedArgs(updatedArtist)
    }, function (err, doc) {
        if (err) {
            common_1.handleError(res, err.message, "Failed to update artist", 500);
        }
        else {
            common_1.logSuccess(updatedArtist);
            res.status(201).json(updatedArtist);
        }
    });
});
router.delete("/:id", function (req, res) {
    req.app.db.collection(common_1.ARTISTS_COLLECTION).remove({ _id: new req.app.mongoose.Types.ObjectId(req.params.id) }, function (err, doc) {
        if (err)
            common_1.handleError(res, err.message, "Failed to delete artist.", 500);
        else
            res.status(201);
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
//# sourceMappingURL=artists.routes.js.map