import DisLike from "../models/dislikes/DisLike";

/**
 * @file Declares API for DisLikes related data access object methods
 */
export default interface DisLikeDaoI {
    findAllUsersThatDisLikedTuit (tid: string): Promise<DisLike[]>;
    findAllTuitsDisLikedByUser (uid: string): Promise<DisLike[]>;
    userUnDisLikesTuit (tid: string, uid: string): Promise<any>;
    userDisLikesTuit (tid: string, uid: string): Promise<DisLike>;
};