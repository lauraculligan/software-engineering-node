/**
 * @file Implements mongoose model structure for the messages collection
 */
import mongoose, {Schema} from "mongoose";
import Message from "../models/Message";

const MessageSchema = new mongoose.Schema<Message>({
    message: String,
    to: {type: Schema.Types.ObjectId, ref: "UserModel"},
    from: {type: Schema.Types.ObjectId, ref: "UserModel"},
    sentOn: {type: Date, default: Date.now}
}, {collection: "messages"});
export default MessageSchema;