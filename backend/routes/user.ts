import express from "express"
import {getUser} from "../controller/userController"

const router = express.Router()

// Get user credentials
router.get("/user", getUser)


export default router;