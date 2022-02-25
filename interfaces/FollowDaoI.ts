/**
 * @file Declares API for Follows related data access object methods
 */

import Follow from "../models/Follow";

export default interface FollowDaoI {
    userFollowsUser (uidFollowed: string, uidFollowing: string): Promise<Follow>;
    userUnfollowsUser (uidFollowed: string, uidFollowing: string): Promise<any>;
    findAllUsersTheyFollow (uid: string): Promise<Follow[]>;
    findAllUsersFollowingThem (uid: string): Promise<Follow[]>;
};