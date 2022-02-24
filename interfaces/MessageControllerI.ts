import {Request, Response} from "express";

export default interface MessageControllerI {
    userSendsMessage (req: Request, res: Response): void;
    findAllMessagesSentToUser (req: Request, res: Response): void;
    findAllMessagesSentFromUser (req: Request, res: Response): void;
    userDeletesMessage (req: Request, res: Response): void;
};