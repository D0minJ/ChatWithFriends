import {Schema, model} from "mongoose";


const MessageSchema = new Schema({
    to: {
        to_id: { type: Schema.Types.Mixed, ref: 'users' },
        to_username: { type: String }
    },
    from: {
        from_id: { type: Schema.Types.Mixed, ref: 'users' },
        from_username: { type: String }
    },
    body: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: new Date(Date.now())
    }
});

export default model("Message", MessageSchema, "messages");