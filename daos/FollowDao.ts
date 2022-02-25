import FollowDaoI from "../interfaces/FollowDaoI";
import FollowModel from "../mongoose/FollowModel";
import Follow from "../models/Follow";

export default class FollowDao implements FollowDaoI {
    private static followDao: FollowDao | null = null;
    public static getInstance = (): FollowDao => {
        if(FollowDao.followDao === null) {
            FollowDao.followDao = new FollowDao();
        }
        return FollowDao.followDao;
    }
    private constructor() {}

    userFollowsUser = async (uidFollowed: string, uidFollowing: string): Promise<any> =>
        FollowModel.create({userFollowed: uidFollowed, userFollowing: uidFollowing});

    userUnfollowsUser = async (uidFollowed: string, uidFollowing: string): Promise<any> =>
        FollowModel.deleteOne({userFollowed: uidFollowed, userFollowing: uidFollowing});

    findAllUsersTheyFollow = async (uid: string): Promise<Follow[]> =>
        FollowModel
            .find({userFollowing: uid})
            .populate("userFollowed")
            .exec();

    findAllUsersFollowingThem = async (uid: string): Promise<Follow[]> =>
        FollowModel
            .find({userFollowed: uid})
            .populate("userFollowing")
            .exec();
}