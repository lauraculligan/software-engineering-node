/**
 * @file Declares Dislike data type representing relationship between
 * users and tuits, as in user dislikes a tuit
 */
import Tuit from "../tuits/Tuit";
import User from "../users/User";

/**
 * @typedef Like Represents dislikes relationship between a user and a tuit,
 * as in a user dislikes a tuit
 * @property {Tuit} tuit Tuit being dislike
 * @property {User} likedBy User disliking the tuit
 */

export default interface DisLike {
    tuit: Tuit,
    likedBy: User
};