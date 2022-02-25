/**
 * @file Controller RESTful Web service API for messages resource
 */
import MessageDao from "../daos/MessageDao";
import Message from "../models/Message";
import {Express, Request, Response} from "express";
import MessageControllerI from "../interfaces/MessageControllerI";

/**
 * @class MessageController Implements RESTful Web service API for messages resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>POST /api/users/:uid/messages to create a new message instance
 *     being sent from a given user</li>
 *     <li>GET /api/users/:uid/messages/:uidTo to retrieve messages sent to the user</li>
 *     <li>GET /api/users/:uid/messages/:uidFrom to retrieve messages sent by the user </li>
 *     <li>DELETE /api/messages/:mid to remove a particular message instance</li>
 * </ul>
 * @property {MessageDao} MessageDao Singleton DAO implementing message CRUD operations
 * @property {MessageController} messageController Singleton controller implementing
 * RESTful Web service API
 */

export default class MessageController implements MessageControllerI {
    private static messageDao: MessageDao = MessageDao.getInstance();
    private static messageController: MessageController | null = null;

    /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     * @return MessageController
     */
    public static getInstance = (app: Express): MessageController => {
        if(MessageController.messageController === null) {
            MessageController.messageController = new MessageController();
            app.post("/api/users/:uidTo/messages/:uidFrom", MessageController.messageController.userSendsMessage);
            app.get("/api/messages/:uid", MessageController.messageController.findAllMessagesSentToUser);
            app.get("/api/messages/:uid", MessageController.messageController.findAllMessagesSentFromUser);
            app.delete("/api/messages/:mid", MessageController.messageController.userDeletesMessage);
        }
        return MessageController.messageController;
    }

    private constructor() {}

    /**
     * @param {Request} req Represents request from client, including body
     * containing the JSON object for the new message to be inserted in the
     * database
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the new message that was inserted in the
     * database
     */
    userSendsMessage = (req: Request, res: Response) =>
        MessageController.messageDao.userSendsMessage(req.params.uidTo, req.params.uidFrom, req.body)
            .then((message: Message) => res.json(message));

    /**
     * Retrieves all messages from the database sent to a particular user and returns
     * an array of messages.
     * @param {Request} req Represents request from client
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the message objects
     */
    findAllMessagesSentToUser = (req: Request, res: Response) =>
        MessageController.messageDao.findAllMessagesSentToUser(req.params.uid)
            .then((messages: Message[]) => res.json(messages));

    /**
     * Retrieves all messages from the database sent from a particular user and returns
     * an array of messages.
     * @param {Request} req Represents request from client
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the message objects
     */
    findAllMessagesSentFromUser = (req: Request, res: Response) =>
        MessageController.messageDao.findAllMessagesSentFromUser(req.params.uid)
            .then((messages: Message[]) => res.json(messages));

    /**
     * @param {Request} req Represents request from client, including path
     * parameter mid identifying the primary key of the message to be removed
     * @param {Response} res Represents response to client, including status
     * on whether deleting a message was successful or not
     */
    userDeletesMessage = (req: Request, res: Response) =>
        MessageController.messageDao.userDeletesMessage(req.params.mid)
            .then((status) => res.send(status));
};