/**
 * @file Declares API for Messages related data access object methods
 */

import Message from "../models/Message";

export default interface MessageDaoI {
    userSendsMessage(uidTo: string, uidFrom: string, message: Message): Promise<Message>;
    findAllMessagesSentToUser(uid: string): Promise<Message[]>;
    findAllMessagesSentFromUser(uid: string): Promise<Message[]>;
    userDeletesMessage(mid: string): Promise<any>;
};