var express = require('express');
var router = express.Router();

const USERS_COLLECTION = "users";

// USER API ROUTES BELOW

router.get("/", function (req, res) {
  req.app.db.collection(USERS_COLLECTION).find({}).toArray(function (err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get users.");
    } else {
      res.status(200).json(docs);
    }
  });
});

router.post("/", function (req, res) {
  var newContact = req.body;

  // validation error checking here
  //   if (!req.body.name) {
  //     handleError(res, "Invalid user input", "Must provide a name.", 400);
  //   }

  req.app.db.collection(USERS_COLLECTION).insertOne(newContact, function (err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new user.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

router.get("/:id", function (req, res) {
});

router.put("/:id", function (req, res) {
  var updatedUser = req.body;
  console.log('server.js:put', updatedUser);

  req.app.db.collection(USERS_COLLECTION).updateOne(
    { "_id": new req.app.mongodb.ObjectId(updatedUser._id) },
    {
      $set:
        {
          "firstName": updatedUser.firstName
        }
    },
    { $set: updatedUser },
    function (err, doc) {
      if (err) {
        console.log('Failed to update user', err);
        handleError(res, err.message, "Failed to update user");
      } else {
        console.log('success?', doc.ops);
        res.status(201).json(doc.ops);
      }
    });
});

router.delete("/:id", function (req, res) {
  req.app.db.collection(USERS_COLLECTION).remove({ _id: new req.app.mongodb.ObjectId(req.params.id) }, function (err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to delete user.");
    } else {
      // res.status(201).json(doc.ops[0]);
      res.status(201);
    }
  })
});

module.exports = router;