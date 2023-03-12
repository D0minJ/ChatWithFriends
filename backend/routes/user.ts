import express from "express"
import {getUser} from "../controller/userController"


const router = express.Router()

// GET USER DATA
router.get("/user", getUser)



export default router;