import express from "express"
import {getUsers} from "../controller/usersControlller"

const router = express.Router()

// Get list of users 
router.get("/users/:name", getUsers)

export default router;