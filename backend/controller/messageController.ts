import {Request, Response} from "express"
import statusCode from "http-status-codes";
import jwt from "jsonwebtoken"
import dayjs from "dayjs"
import calendar from "dayjs/plugin/calendar"

import Message from "../Models/Message";
import User from "../Models/User";
import Conversation from "../Models/Conversation";

interface JwtPayload {
    secureID: string
}

dayjs.extend(calendar)



// Get chat history
const getChats = async (req: Request, res: Response) => { 
    var conversationList: Array<object> = []

    const cookies = req.cookies;
    const refreshToken = cookies.rtoken;
    
    if(!refreshToken){
        return res.status(statusCode.UNAUTHORIZED).json({error: "no refresh token"});
    }

    try{
        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET!);
        const user = await User.findOne({secureID: (decoded as JwtPayload).secureID});

        if(!user){
            return res.status(statusCode.NOT_FOUND).json({error: "User does not exists "});
        }

        const userID = user!.userID;

        // Find all user chat history
        const conversations = await Conversation.find({
            "recipients.userID": userID
        }).sort({
            date: -1
        });
    
        // Get all last messages
        conversations.map((message) => {
            conversationList.push({
                friendID: message.recipients[0].userID !== userID? message.recipients[0].userID : message.recipients[1].userID,
                friendUsername: message.recipients[0].userID !== userID? message.recipients[0].username : message.recipients[1].username,
                lastMessage: message.lastMessage,
                date: dayjs(message.date).calendar()
            });
        });
        
        return res.status(statusCode.OK).json(conversationList);
        

    }catch(error){
        console.log(error);
    }
}

// Get all messages from particular user
const getMessages = async (req: Request, res: Response) => { 
    var messagesList: Array<object> = []

    const cookies = req.cookies;
    const refreshToken = cookies.rtoken;
    const friendID = req.params.friendID;
    
    if(!refreshToken){
        return res.status(statusCode.UNAUTHORIZED).json({error: "no refresh token"});
    }

    // Check if user exists
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET!);
    const user = await User.findOne({secureID: (decoded as JwtPayload).secureID});

    if(!user){
        return res.status(statusCode.NOT_FOUND).json({error: "User does not exists "});
    }

    const userID = user.userID;
    

    // Check if friend exists
    const friend = await User.findOne({userID: friendID});

    if(!friend){
        return res.status(statusCode.NOT_FOUND).json({error: "User does not exists "});
    }

    try{
        const messages = await Message.find(
            {
                $or:[
                    {
                        $and: 
                        [
                            {"from.from_id": userID},
                            {"to.to_id": friendID}
                        ]
                    },
                    {
                        $and:
                        [
                            {"from.from_id": friendID},
                            {"to.to_id": userID}
                        ]
                    }
                ]
            }).sort({
                date: 1
            });

        messages.map((message: any) => {
            messagesList.push({
                from: message.from.from_id,
                to: message.to.to_id,
                body: message.body,
                date: dayjs(message.date).format("D MMM YYYY, h:mm a")
            });
           
        })
        return res.status(statusCode.OK).json(messagesList);

    }catch(error){
        console.log(error);
    }
}

export {getMessages, getChats}













