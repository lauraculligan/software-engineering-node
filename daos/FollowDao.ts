/**
 * @file Implements DAO managing data storage of follows. Uses mongoose UserModel
 * to integrate with MongoDB
 */

import FollowDaoI from "../interfaces/FollowDaoI";
import FollowModel from "../mongoose/FollowModel";
import Follow from "../models/Follow";

/**
 * @class FollowDao Implements Data Access Object managing data storage of Follows
 * @property {FollowDao} followDao Private single instance of FollowDao
 */
export default class FollowDao implements FollowDaoI {
    private static followDao: FollowDao | null = null;
    /**
     * Creates singleton DAO instance
     * @returns FollowDao
     */
    public static getInstance = (): FollowDao => {
        if(FollowDao.followDao === null) {
            FollowDao.followDao = new FollowDao();
        }
        return FollowDao.followDao;
    }
    private constructor() {}

    /**
     * Inserts follow instance into the database
     * @param {string} uidFollowed Followee user's primary key
     * @param {string} uidFollowing Follower user's primary key
     * @returns Promise To be notified when follow is inserted into the database
     */
    userFollowsUser = async (uidFollowed: string, uidFollowing: string): Promise<any> =>
        FollowModel.create({userFollowed: uidFollowed, userFollowing: uidFollowing});

    /**
     * Removes follow from the database.
     * @param {string} uidFollowed Followee user's primary key
     * @param {string} uidFollowing Follower user's primary key
     * @returns Promise To be notified when follow is removed from the database
     */
    userUnfollowsUser = async (uidFollowed: string, uidFollowing: string): Promise<any> =>
        FollowModel.deleteOne({userFollowed: uidFollowed, userFollowing: uidFollowing});

    /**
     * Uses FollowModel to retrieve follow document(s) from the follows collection
     * @param {string} uid User's primary key
     * @returns Promise To be notified when follow is retrieved from the database
     */
    findAllUsersTheyFollow = async (uid: string): Promise<Follow[]> =>
        FollowModel
            .find({userFollowing: uid})
            .populate("userFollowed")
            .exec();

    /**
     * Uses FollowModel to retrieve follow document(s) from the follows collection
     * @param {string} uid User's primary key
     * @returns Promise To be notified when follow is retrieved from the database
     */
    findAllUsersFollowingThem = async (uid: string): Promise<Follow[]> =>
        FollowModel
            .find({userFollowed: uid})
            .populate("userFollowing")
            .exec();
}