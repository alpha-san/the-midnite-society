"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
exports.Schema = mongoose.Schema;
var schema = new exports.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    details: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: {
            validator: function (email) {
                var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return re.test(email);
            },
            message: 'Please fill a valid email address'
        },
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    phone: {
        type: String,
        validate: {
            validator: function (v) {
                return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: '{VALUE} is not a valid phone number!'
        },
        required: [true, 'User phone number required']
    },
    createdAt: {
        type: Date,
        required: false
    },
    modifiedAt: {
        type: Date,
        required: false
    }
}).pre('save', function (next) {
    if (this._doc) {
        var doc = this._doc;
        var now = new Date();
        if (!doc.createdAt) {
            doc.createdAt = now;
        }
        doc.modifiedAt = now;
    }
    next();
    return this;
});
exports.UserSchema = mongoose.model('user', schema, 'users', true);
var UserModel = /** @class */ (function () {
    function UserModel(userModel) {
        this._userModel = userModel;
    }
    Object.defineProperty(UserModel.prototype, "firstName", {
        get: function () {
            return this._userModel.firstName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "lastName", {
        get: function () {
            return this._userModel.lastName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "email", {
        get: function () {
            return this._userModel.email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "phone", {
        get: function () {
            return this._userModel.phone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "details", {
        get: function () {
            return this._userModel.details;
        },
        enumerable: true,
        configurable: true
    });
    return UserModel;
}());
exports.UserModel = UserModel;
Object.seal(UserModel);
// export class User {
//     _id?: string;
//     firstName: string;
//     lastName: string;
//     details: string;
//     email: string;
//     phone: string;
//     constructor(values: Object = {}) {
//         Object.assign(this, values);
//     }
// }
//# sourceMappingURL=user.js.map