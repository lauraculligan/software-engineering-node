/**
 * @file Declares TuitToTag data type representing the relationship between a tuit and a tag,
 * as in a tuit is tagged.
 * @typedef TuitToTag Represents the relationship between a tuit and a tag,
 * as in a tuit is tagged.
 * @property {Tuit} tuit to be tagged
 * @property {string} tag word to tag tuit with
 */
import Tuit from "./Tuit";

export default class TuitToTag {
    private tuit: Tuit | null = null;
    private tag: string = "";
}