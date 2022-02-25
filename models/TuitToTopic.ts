/**
 * @file Declares TuitToTopic data type representing the relationship between a tuit and a topic,
 * as in a tuit categorized into a topic.
 * @typedef TuitToTopic Represents the relationship between a tuit and a topic,
 * as in a tuit categorized into a topic.
 * @property {Tuit} tuit object to be grouped
 * @property {string} topic word title for Topic grouping
 */
import Tuit from "./Tuit";

export default class TuitToTopic {
    private tuit: Tuit | null = null;
    private topic: string = "";
}