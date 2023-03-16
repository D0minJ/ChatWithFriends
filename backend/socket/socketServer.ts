import { Server, Socket } from "socket.io"
import Message from "../Models/Message"
import User from "../Models/User"
import Conversation from "../Models/Conversation"

interface ISocket extends Socket{
    user?: any
    userID?: string
}

// Set last message to database
const lastMessage = async (fromID: string, fromUsername: string, toID: string, toUsername: string, message: string) => {
    const conversation = await Conversation.find({
        "recipients.userID": { $all: [fromID, toID]}
    });

    if(conversation.length === 0){
        const conversation = await Conversation.create({
            recipients: [{userID: fromID, username: fromUsername}, {userID: toID, username: toUsername}], 
            lastMessage: message,
            date: new Date(Date.now())
        });
        
    } else {
        const conversation = await Conversation.updateOne({ "recipients.userID": { $all: [fromID, toID]} }, { lastMessage: message, date: new Date(Date.now())});
    }
}

export default function SocketServer(httpServer: any){
    let activeUsers: any = []
    const io = new Server(httpServer, {
        cors: {
          origin: "http://localhost:3000",
        },
      });


    io.use((socket: ISocket, next) => {
        const userID = socket.handshake.auth.userID;

        if(!userID){
            return next(new Error("invalid user id"));
        }

        socket.user = User.findOne({userID: userID});
        socket.userID = userID;
        next();
    });

    io.on("connection", (socket: ISocket) => {

        var user = {
            socketID: socket.id,
            userID: socket.userID! 
        }
        activeUsers.push(user);

        console.log("User " + socket.userID + " connected. Session ID: " + socket.id);
        console.log(activeUsers);

        socket.on("send message", (from, to, fromUsername, toUsername, content) => { 
            // Translate user ID to socket ID
            const _from = activeUsers.find((user: any) => user.userID === from);
            const _to = activeUsers.find((user: any) => user.userID === to);

            if(content === ""){
                return 0;
            }

            const message = Message.create({
                to: {to_id: to, to_username: toUsername},
                from: {from_id: from, from_username: fromUsername },
                body: content,
                date: new Date(Date.now())
            })

            lastMessage(from, fromUsername, to, toUsername, content);


            if(_to === undefined){
                io.to(_from.socketID).emit("receive message", {from: from, to: to, content: content});
            }else{
                io.to(_from.socketID).to(_to.socketID).emit("receive message", {from: from, to: to, content: content});
            }

        });
        
        socket.on('disconnect', () => {
            activeUsers = activeUsers.filter((obj: any) => obj.socketID !== socket.id )
            console.log('A user disconnected');
            socket.disconnect();
          });
    });
}


