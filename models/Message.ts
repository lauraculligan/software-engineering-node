/**
 * @file Declares Message data type representing a text phrase shared from
 * one user to another user
 */

import User from "./User";

/**
 * @typedef Message Represents a message sent from one user to another user, as in one user messages another
 * @property {string} message text being sent
 * @property {User} to User message is sent to
 * @property {User} from User message is sent from
 * @property {Date} sentOn timestamp of when message was sent
 */

export default interface Message {
    message: string,
    to: User,
    from: User,
    sentOn?: Date
};