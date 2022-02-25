/**
 * @file Declares Location data type representing user's location
 * @typedef Location Represents location of User
 * @property {number} latitude latitude value on Earth
 * @property {number} longitude longitude value on Earth
 */
export default interface Location {
    latitude: number,
    longitude: number
};