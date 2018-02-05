"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
// import { IUserModel, UserSchema } from '../../../client/src/app/users/user';
// import { IUserModel } from '../../models/user';
var express = require('express');
var router = express.Router();
var USERS_COLLECTION = "users";
// USER API ROUTES BELOW
router.get("/", function (req, res) {
    req.app.db.collection(USERS_COLLECTION).find({}).toArray(function (err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get users.", 500);
        }
        else {
            res.status(200).json(docs);
        }
    });
});
router.post("/", function (req, res) {
    var newContact = req.body;
    newContact.createdAt = new Date().toLocaleString();
    // validation error checking here
    //   if (!req.body.name) {
    //     handleError(res, "Invalid user input", "Must provide a name.", 400);
    //   }
    req.app.db.collection(USERS_COLLECTION).insertOne(newContact, function (err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to create new user.", 500);
        }
        else {
            res.status(201).json(doc.ops[0]);
        }
    });
});
router.get("/:id", function (req, res) {
});
router.put("/:id", function (req, res) {
    var updatedUser = req.body;
    if (!updatedUser.createdAt)
        updatedUser.createdAt = new Date().toLocaleString();
    else
        updatedUser.modifiedAt = new Date().toLocaleString();
    console.log('server.js:put', updatedUser);
    req.app.db.collection(USERS_COLLECTION).updateOne({ "_id": new req.app.mongodb.ObjectId(updatedUser._id) }, {
        $set: {
            "firstName": updatedUser.firstName
        }
    }, { $set: updatedUser }, function (err, doc) {
        if (err) {
            console.log('Failed to update user', err);
            handleError(res, err.message, "Failed to update user", 500);
        }
        else {
            console.log('success?', doc.ops);
            res.status(201).json(doc.ops);
        }
    });
});
router.delete("/:id", function (req, res) {
    req.app.db.collection(USERS_COLLECTION).remove({ _id: new req.app.mongodb.ObjectId(req.params.id) }, function (err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to delete user.", 500);
        }
        else {
            // res.status(201).json(doc.ops[0]);
            res.status(201);
        }
    });
});
var RepositoryBase = /** @class */ (function () {
    function RepositoryBase(schemaModel) {
        this._model = schemaModel;
    }
    RepositoryBase.prototype.create = function (item, callback) {
        this._model.create(item, callback);
    };
    RepositoryBase.prototype.retrieve = function (callback) {
        this._model.find({}, callback);
    };
    RepositoryBase.prototype.update = function (_id, item, callback) {
        this._model.update({ _id: _id }, item, callback);
    };
    RepositoryBase.prototype.delete = function (_id, callback) {
        this._model.remove({ _id: this.toObjectId(_id) }, function (err) { return callback(err, null); });
    };
    RepositoryBase.prototype.findById = function (_id, callback) {
        this._model.findById(_id, callback);
    };
    RepositoryBase.prototype.findOne = function (cond, callback) {
        return this._model.findOne(cond, callback);
    };
    RepositoryBase.prototype.find = function (cond, fields, options, callback) {
        return this._model.find(cond, options, callback);
    };
    RepositoryBase.prototype.toObjectId = function (_id) {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    };
    return RepositoryBase;
}());
exports.RepositoryBase = RepositoryBase;
// export class UserRepository extends RepositoryBase<IUserModel> {
//     constructor() {
//         super(UserSchema);
//     }
// }
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}
module.exports = router;
//# sourceMappingURL=users.routes.js.map