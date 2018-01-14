import * as  mongoose from 'mongoose';

export let Schema = mongoose.Schema;

export interface IUserModel extends mongoose.Document {
    firstName: string;
    lastName: string;
    details: string;
    email: string;
    phone: string;
    createdAt: Date;
    modifiedAt: Date;
}

let schema = new Schema({
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
                return re.test(email)
            }, 
            message: 'Please fill a valid email address'},
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
        let doc = <IUserModel>this._doc;
        let now = new Date();
        if (!doc.createdAt) {
            doc.createdAt = now;
        }
        doc.modifiedAt = now;
    }
    next();
    return this;
});

export class TestMongoose { sumthin(): void { console.log('mongoose');} }

export let UserSchema = mongoose.model<IUserModel>('user', schema, 'users', true);

export class UserModel {
    private _userModel: IUserModel;

    constructor(userModel: IUserModel) {
        this._userModel = userModel;
    }

    get firstName(): string {
        return this._userModel.firstName;
    }

    get lastName(): string {
        return this._userModel.lastName;
    }

    get email(): string {
        return this._userModel.email;
    }

    get phone(): string {
        return this._userModel.phone;
    }

    get details(): string {
        return this._userModel.details;
    }
}

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
