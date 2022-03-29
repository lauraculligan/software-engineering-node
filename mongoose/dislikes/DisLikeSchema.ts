/**
 * @file Implements mongoose schema for dislikes
 */

/**
 * @typedef DisLike Represents tuit dislikes
 * @property {Tuit} tuit The dislike Tuit
 * @property {User} dislikedBy User that disliked
 */

import mongoose, {Schema} from "mongoose";
import DisLike from "../../models/dislikes/DisLike";

const DisLikeSchema = new mongoose.Schema<DisLike>({
    tuit: {type: Schema.Types.ObjectId, ref: "TuitModel"},
    dislikedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "dislikes"});
export default DisLikeSchema;