/**
 * @file Controller RESTful Web service API for follows resource
 */
import {Express, Request, Response} from "express";
import FollowDao from "../daos/FollowDao";
import FollowControllerI from "../interfaces/FollowControllerI";

/**
 * @class FollowController Implements RESTful Web service API for follows resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /api/users/:uid/follows to retrieve all the users that have followed a user
 *     </li>
 *     <li>GET /api/users/:uid/follows to retrieve all the users a user is following
 *     </li>
 *     <li>POST /api/users/:uid/follows/:userFollowed to record that a user follows another user
 *     </li>
 *     <li>DELETE /api/users/:uid/unfollows/:uid to record that a user unfollows another user
 *     </li>
 * </ul>
 * @property {FollowDao} followDao Singleton DAO implementing follows CRUD operations
 * @property {FollowController} FollowController Singleton controller implementing
 * RESTful Web service API
 */
export default class FollowController implements FollowControllerI {
    private static followDao: FollowDao = FollowDao.getInstance();
    private static followController: FollowController | null = null;
/**
 * Creates singleton controller instance
 * @param {Express} app Express instance to declare the RESTful Web service
 * API
 * @return FollowController
 */
public static getInstance = (app: Express): FollowController => {
    if(FollowController.followController === null) {
        FollowController.followController = new FollowController();
        app.post("/api/users/:uidFollowing/follows/:uidFollowed", FollowController.followController.userFollowsUser);
        app.delete("/api/users/:uidFollowing/unfollows/:uidFollowed", FollowController.followController.userUnfollowsUser);
        //app.get("/api/users/:uid/follows", FollowController.followController.findAllUsersTheyFollow);
        app.get("/api/users/:uid/follows", FollowController.followController.findAllUsersFollowingThem);
        app.get("/api/follows/:uid", FollowController.followController.findAllUsersTheyFollow);
    }
    return FollowController.followController;
}

private constructor() {}

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters uid and userFollowed representing the user that is doing the following and the user who is
     * being followed
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the new follows that was inserted in the
     * database
     */
    userFollowsUser = (req: Request, res: Response) =>
        FollowController.followDao.userFollowsUser(req.params.uidFollowed, req.params.uidFollowing)
            .then(follows => res.json(follows));

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters uid and uid representing the user that is doing the unfollowing and the
     * user that is being unfollowed
     * @param {Response} res Represents response to client, including status
     * on whether deleting the follow was successful or not
     */
    userUnfollowsUser = (req: Request, res: Response) =>
        FollowController.followDao.userUnfollowsUser(req.params.uidFollowed, req.params.uidFollowing)
            .then(status => res.send(status));

    /**
     * Retrieves all users that a user is following from the database
     * @param {Request} req Represents request from client, including the path
     * parameter uid representing the user doing the following
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the user objects that were liked
     */
    findAllUsersTheyFollow = (req: Request, res: Response) =>
        FollowController.followDao.findAllUsersFollowingThem(req.params.uid)
            .then(follows => res.json(follows));

    /**
     * Retrieves all users that are following a user from the database
     * @param {Request} req Represents request from client, including the path
     * parameter uid representing the user doing the following
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the user objects that were liked
     */
    findAllUsersFollowingThem = (req: Request, res: Response) =>
        FollowController.followDao.findAllUsersFollowingThem(req.params.uid)
            .then(follows => res.json(follows));

};



