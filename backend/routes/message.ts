import express from "express"
import {getMessages, getChats} from "../controller/messageController"

const router = express.Router()

// Get chat history  
router.get("/chats", getChats)

// Get messages from user 
router.get("/messages/:friendID", getMessages)


export default router;