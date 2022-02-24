/**
 * @file Declares Follow data type representing relationship between
 * users and users, as in user follows another user
 */
import User from "./User";

/**
 * @typedef Follow Represents follows relationship between a user and another user,
 * as in a user follows another user.
 * @property {User} userFollowed User that is choosing to follow another user
 * @property {User} userFollowing User that is being followed by another user
 */

export default interface Follow {
    userFollowed: User,
    userFollowing: User
};