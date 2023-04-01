import express from "express";
import { Socket } from "socket.io"
import dotenv from "dotenv";
import mongoose from "mongoose";
import {createServer} from "http"
import cors from "cors"
import cookieParser from "cookie-parser";

import AuthRoute from "./routes/auth";
import TokenRoute from "./routes/token"
import UserRoute from "./routes/user"
import UsersRoute from "./routes/users"
import MessageRoute from "./routes/message"

import { verifyJWT } from "./middleware/verifyJWT";
import credentials from "./middleware/credentials";
import corsOptions from "./config/corsOptions";

import SocketServer from "./socket/socketServer";


dotenv.config()

interface ISocket extends Socket{
    userID?: string
}

const app = express();
const httpServer = createServer(app);

const start = async () =>{
    try{
        await mongoose.connect(process.env.MongoURL!)
        console.log("Connection with database has been established ");
        httpServer.listen(process.env.PORT, () => {
            console.log("SERVER STARTED AT PORT: " + process.env.PORT);
        });
    } catch(error) {
        console.log(error);

    }
};

SocketServer(httpServer);

start();

app.use(credentials);
app.use(cors(corsOptions));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", AuthRoute);

app.use("/api/v1/token", TokenRoute);

app.use(verifyJWT)

app.use("/api/v1", UsersRoute);

app.use("/api/v1", UserRoute);

app.use("/api/v1", MessageRoute);
