/**
 * @file Implements an Express Node HTTP server. Declares RESTful Web services
 * enabling CRUD operations on the following resources:
 * <ul>
 *     <li>users</li>
 *     <li>tuits</li>
 *     <li>likes</li>
 *     <li>follows</li>
 *     <li>bookmarks</li>
 *     <li>messages</li>
 * </ul>
 *
 * Connects to a remote MongoDB instance hosted on the Atlas cloud database service
 */

import express, {Request, Response} from 'express';
import UserController from "./controllers/UserController";
import TuitController from "./controllers/TuitController";
import LikeController from "./controllers/LikeController";
import FollowController from "./controllers/FollowController";
import BookmarkController from "./controllers/BookmarkController";
import MessageController from "./controllers/MessageController";
import mongoose from "mongoose";
var cors = require('cors')

// connect to the database

/*
const DB_USERNAME = process.env.lauraculligan;
const DB_PASSWORD = process.env.Matthew;
const connectionString = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.m8jeh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(connectionString);
*/

const mongoString = "mongodb+srv://lauraculligan:Matthew@cluster0.aeetd.mongodb.net/tuiter?retryWrites=true&w=majority";

mongoose.connect(mongoString);

//mongoose.connect('mongodb://localhost:27017/tuiter');

// create RESTful Web service API
const app = express();
//app.use(express.json());
//app.use(express.urlencoded());
app.use(cors());

app.get('/', (req: Request, res: Response) =>
    res.send('Welcome!'));

app.get('/add/:a/:b', (req: Request, res: Response) =>
    res.send(req.params.a + req.params.b));


// create RESTful Web service API
const userController = UserController.getInstance(app);
const tuitController = TuitController.getInstance(app);
const likesController = LikeController.getInstance(app);
const followsController = FollowController.getInstance(app);
const bookmarksController = BookmarkController.getInstance(app);
const messagesController = MessageController.getInstance(app);

/**
 * Start a server listening at port 4000 locally
 * but use environment variable PORT on Heroku if available.
 */
const PORT = 4000;
app.listen(process.env.PORT || PORT);