import express, {Request, Response} from 'express';
import UserController from "./controllers/UserController";
import UserDao from "./daos/UserDao";
import TuitController from "./controllers/TuitController";
import TuitDao from "./daos/TuitDao";
import mongoose from "mongoose";

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
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req: Request, res: Response) =>
    res.send('Welcome!'));

app.get('/add/:a/:b', (req: Request, res: Response) =>
    res.send(req.params.a + req.params.b));

const userController = new UserController(app, new UserDao());
const tuitController = new TuitController(app, new TuitDao());

const PORT = 4000;
app.listen(process.env.PORT || PORT);