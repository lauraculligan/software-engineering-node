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
    public static getInstance = (): MessageDao => {
        if(MessageDao.messageDao === null) {
            MessageDao.messageDao = new MessageDao();
        }
        return MessageDao.messageDao;
    }
    private constructor() {}

    userSendsMessage = async (uidTo: string, uidFrom: string, message: Message): Promise<Message> =>
        MessageModel.create({...message, to: uidTo, from: uidFrom});
    findAllMessagesSentToUser = async (uid: string): Promise<Message[]> =>
        MessageModel.find({to: uid});
    findAllMessagesSentFromUser = async (uid: string): Promise<Message[]> =>
        MessageModel.find({from: uid});
    userDeletesMessage = async (mid: string): Promise<any> =>
        MessageModel.deleteOne({_id: mid});
}