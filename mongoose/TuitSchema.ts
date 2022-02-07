import mongoose, {Schema} from "mongoose";
import UserModel from "./UserModel";
import User from "../models/User";
import Tuit from "../models/Tuit";

const TuitSchema = new mongoose.Schema({
    tuit: String,
    postedOn: {type: Date, default: Date.now},
    postedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: 'tuits'});
export default TuitSchema;

