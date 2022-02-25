/**
 * @file Implements DAO managing data storage of messages. Uses mongoose MessageModel
 * to integrate with MongoDB
 */
import MessageModel from "../mongoose/MessageModel";
import Message from "../models/Message";
import MessageDaoI from "../interfaces/MessageDaoI";

/**
 * @class MessageDao Implements Data Access Object managing data storage
 * of Messages
 * @property {MessageDao} messageDao Private single instance of MessageDao
 */
export default class MessageDao implements MessageDaoI{
    private static messageDao: MessageDao | null = null;

    /**
     * Creates singleton DAO instance
     * @returns MessageDao
     */
    public static getInstance = (): MessageDao => {
        if(MessageDao.messageDao === null) {
            MessageDao.messageDao = new MessageDao();
        }
        return MessageDao.messageDao;
    }
    private constructor() {}

    /**
     * Inserts message instance into the database
     * @param {string} uidTo Receiving user's primary key
     * @param {string} uidFrom Sending user's primary key
     * @param {Message} message Instance be inserted into the database
     * @returns Promise To be notified when message is inserted into the database
     */
    userSendsMessage = async (uidTo: string, uidFrom: string, message: Message): Promise<Message> =>
        MessageModel.create({...message, to: uidTo, from: uidFrom});

    /**
     * Uses MessageModel to retrieve message(s) document from the messages collection
     * @param {string} uid User's primary key
     * @returns Promise To be notified when message is retrieved from the database
     */
    findAllMessagesSentToUser = async (uid: string): Promise<Message[]> =>
        MessageModel.find({to: uid});

    /**
     * Uses MessageModel to retrieve message(s) document from the messages collection
     * @param {string} uid User's primary key
     * @returns Promise To be notified when message is retrieved from the database
     */
    findAllMessagesSentFromUser = async (uid: string): Promise<Message[]> =>
        MessageModel.find({from: uid});

    /**
     * Removes message from the database.
     * @param {string} mid Primary key of message to be removed
     * @returns Promise To be notified when message is removed from the database
     */
    userDeletesMessage = async (mid: string): Promise<any> =>
        MessageModel.deleteOne({_id: mid});
}