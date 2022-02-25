/**
 * @file Declares User data type representing the information corresponding to an account
 */
import AccountType from "./AccountType";
import MaritalStatus from "./MaritalStatus";
import Location from "./Location";
import mongoose from "mongoose";

/**
 * @typedef User Represents the information corresponding to an account
 * @property {string} username Display name
 * @property {string} password Login requirement
 * @property {string} firstName stored name
 * @property {string} lastName stored name
 * @property {string} email address name
 * @property {string} profilePhoto path to photo
 * @property {string} headerImage path to photo
 * @property {string} biography personal description
 * @property {Date} dateOfBirth
 * @property {AccountType} accountType that user has registered for
 * @property {MaritalStatus} martialStatus
 * @property {Location} location
 * @property {number} salary Pay rate
 */

export default interface User {
    _id?: mongoose.Schema.Types.ObjectId,
    username: string,
    password: string,
    firstName?: string,
    lastName?: string,
    email: string,
    profilePhoto?: string,
    headerImage?: string,
    biography?: string,
    dateOfBirth?: Date,
    accountType?: AccountType,
    maritalStatus?: MaritalStatus,
    location?: Location,
    salary?: number
};