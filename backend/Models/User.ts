import {Schema, model} from "mongoose";


const UserSchema = new Schema({
    userID: {
        type: String,
        minLength: 1,
        maxLength: 128,
        unique: true,
        trim: true,
        required: true
    },
    secureID: {
        type: String,
        minLength: 1,
        maxLength: 128,
        unique: true,
        trim: true,
        required: true
    },
    firstname: {
        type: String,
        minLength: 1,
        maxLength: 24,
        trim: true,
        required: true
    },
    lastname: {
        type: String,
        minLength: 1,
        maxLength: 24,
        trim: true,
        required: true
    },
    email: {
        type: String,
        minLength: 1,
        maxLength: 64,
        unique: true,
        trim: true,
        required: true
    },
    password: {
        type: String,
        minLength: 8,
        maxLength: 128,
        trim: true,
        required: true
    },
    refreshToken: {
        token: String,
        dateCreatedToken: Date,
        tokenExpire: Date
    },
    dateCreatedAccount: {
        type: String,
        default: new Date(Date.now())
    },
    blockedPeople:[
        { type: Schema.Types.Mixed, ref: 'users' }
    ]
});

export default model("User", UserSchema, "users");