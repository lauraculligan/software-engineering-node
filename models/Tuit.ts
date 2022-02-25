/**
 * @file Declares Tuit data type representing the phrase being posted by a User
 */
import User from "./User";

/**
 * @typedef Tuit Represents tuit created by user.
 * @property {string} tuit phrase
 * @property {User} postedBy User posting the tuit
 * @property {Date} postedOn Date tuit was posted
 */

export default interface Tuit {
    tuit: string,
    postedBy: User,
    postedOn?: Date,
};