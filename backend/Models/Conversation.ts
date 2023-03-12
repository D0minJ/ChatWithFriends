import {Schema, model} from "mongoose";

const ConversationSchema = new Schema({
    recipients: [
        {
            type: Schema.Types.Mixed,
            ref: 'users'
        }
    ],
    lastMessage: {
        type: String
    },
    date: {
        type: Date,
        default: new Date(Date.now())
    }
});

export default model("Conversation", ConversationSchema, "conversations");