import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import http from "http"
import cors from "cors"
import credentials from "./middleware/credentials";
import corsOptions from "./config/corsOptions";
import AuthRoute from "./routes/auth";
import TokenRoute from "./routes/token"
import { StatusCodes } from "http-status-codes";
import { verifyJWT } from "./middleware/verifyJWT";
import cookieParser from "cookie-parser";



const app = express();
const server = http.createServer(app);
dotenv.config()

const start = async () =>{
    try{
        await mongoose.connect(process.env.MongoURL!)
        console.log("Connection with database has been established ") 
        server.listen(process.env.PORT, () =>{
            console.log("SERVER STARTED AT PORT: " + process.env.PORT)   
        });
    }catch(error){
        console.log(error)

    }
};

start();

app.use(credentials);
app.use(cors(corsOptions));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(cookieParser());


app.use("/api/v1/auth", AuthRoute)
app.use("/api/v1/token", TokenRoute)

app.use(verifyJWT)

app.use("/hello", (req: Request, res: Response) => {
    res.status(StatusCodes.OK).json({msg: "Hello there!"})
});









