import express from "express"
import {getUsers} from "../controller/usersControlller"


const router = express.Router()

// GET USERS 
router.get("/users/:name", getUsers)



export default router;