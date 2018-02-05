import * as mongoose from 'mongoose';
// import { IUserModel, UserSchema } from '../../../client/src/app/users/user';
// import { IUserModel } from '../../models/user';

var express = require('express');
var router = express.Router();

const USERS_COLLECTION = "users";

// USER API ROUTES BELOW

router.get("/", function (req, res) {
  req.app.db.collection(USERS_COLLECTION).find({}).toArray(function (err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get users.", 500);
    } else {
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
    } else {
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
        handleError(res, err.message, "Failed to update user", 500);
      } else {
        console.log('success?', doc.ops);
        res.status(201).json(doc.ops);
      }
    });
});

router.delete("/:id", function (req, res) {
  req.app.db.collection(USERS_COLLECTION).remove({ _id: new req.app.mongodb.ObjectId(req.params.id) }, function (err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to delete user.", 500);
    } else {
      // res.status(201).json(doc.ops[0]);
      res.status(201);
    }
  })
});

export interface IRead<T> {
    retrieve: (callback: (error: any, result: any) => void) => void;
    findById: (id: string, callback: (error: any, result: T) => void) => void;
    findOne(cond?: Object, callback?: (err: any, res: T) => void): mongoose.Query<T>;
    find(cond: Object, fields: Object, options: Object, callback?: (err: any, res: T[]) => void): mongoose.Query<T[]>;
}

export interface IWrite<T> {
    create: (item: T, callback: (error: any, result: any) => void) => void;
    update: (_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) => void;
    delete: (_id: string, callback: (error: any, result: any) => void) => void;
}

export class RepositoryBase<T extends mongoose.Document> implements IRead<T>, IWrite<T> {

    private _model: mongoose.Model<mongoose.Document>;

    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }

    create(item: T, callback: (error: any, result: T) => void) {
        this._model.create(item, callback);
    }

    retrieve(callback: (error: any, result: T) => void) {
        this._model.find({}, callback);
    }

    update(_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) {
        this._model.update({ _id: _id }, item, callback);
    }

    delete(_id: string, callback: (error: any, result: any) => void) {
        this._model.remove({ _id: this.toObjectId(_id) }, (err) => callback(err, null));
    }

    findById(_id: string, callback: (error: any, result: T) => void) {
        this._model.findById(_id, callback);
    }

    findOne(cond?: Object, callback?: (err: any, res: T) => void): mongoose.Query<T> {
        return this._model.findOne(cond, callback);
    }

    find(cond?: Object, fields?: Object, options?: Object, callback?: (err: any, res: T[]) => void): mongoose.Query<T[]> {
        return this._model.find(cond, options, callback);
    }

    private toObjectId(_id: string): mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    }

}

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
