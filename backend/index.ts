import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import http from "http"
import cors from "cors"
import AuthRoute from "./routes/Auth";


const app = express();
const server = http.createServer(app);
dotenv.config()




app.use(express.json());
app.use(cors());




const start = async () =>{
    try{
        await mongoose.connect(process.env.MongoURL!)
        .then(() => console.log("Connection with database has been established ")) 
        .catch(err => console.log(err));
        server.listen(process.env.PORT, () =>{
            console.log("SERVER STARTED AT PORT: " + process.env.PORT)   
        });
    }catch(error){
        console.log(error)

    }
};

start();







