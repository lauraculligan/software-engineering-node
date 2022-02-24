import {Request, Response} from "express";

export default interface FollowControllerI {
    userFollowsUser (req: Request, res: Response): void;
    userUnfollowsUser (req: Request, res: Response): void;
    findAllUsersTheyFollow (req: Request, res: Response): void;
    findAllUsersFollowingThem (req: Request, res: Response): void;
};