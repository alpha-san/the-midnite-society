var express = require('express');
var router = express.Router();
var TRACKS_COLLECTION = "tracks";
// TRACK API ROUTES BELOW
router.get("/", function (req, res) {
    req.app.db.collection(TRACKS_COLLECTION).find({}).toArray(function (err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get tracks", 500);
        }
        else {
            res.status(200).json(docs);
        }
    });
});
router.post("/", function (req, res) {
    var newTrack = req.body;
    // validation error checking here
    //   if (!req.body.name) {
    //     handleError(res, "Invalid user input", "Must provide a name.", 400);
    //   }
    req.app.db.collection(TRACKS_COLLECTION).insertOne(newTrack, function (err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to create new album.", 500);
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
    // req.app.db.collection(TRACKS_COLLECTION).updateOne(
    //   { "_id": new req.app.mongodb.ObjectId(updatedTrack._id) },
    //   { $set: updatedTrack },
    //   function (err, doc) {
    //     if (err) {
    //       handleError(res, err.message, "Failed to update album");
    //     } else {
    //       res.status(201).json(doc.ops);
    //     }
    //   });
});
router.delete("/:id", function (req, res) {
    req.app.db.collection(TRACKS_COLLECTION).remove({ _id: new req.app.mongodb.ObjectId(req.params.id) }, function (err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to delete album.", 500);
        }
        else {
            // res.status(201).json(doc.ops[0]);
            res.status(201);
        }
    });
});
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}
module.exports = router;
//# sourceMappingURL=tracks.routes.js.map