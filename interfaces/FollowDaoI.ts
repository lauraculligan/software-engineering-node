/**
 * @file Declares API for Follows related data access object methods
 */

import Follow from "../models/Follow";

export default interface FollowDaoI {
    userFollowsUser (uidFollowed: string, uidFollowing: string): Promise<Follow>;
    userUnfollowsUser (uidFollowed: string, uidFollowing: string): Promise<any>;
    findAllUsersTheyFollow (uidFollowing: string): Promise<Follow[]>;
    findAllUsersFollowingThem (uidFollowed: string): Promise<Follow[]>;
};