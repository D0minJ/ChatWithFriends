import {Schema, model} from "mongoose";



const UserSchema = new Schema({
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
    }

});

export default model("User", UserSchema, "users");