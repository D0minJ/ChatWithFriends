import express from "express"
import {Register} from "../controller/Auth-Controller"


const router = express.Router()



router.post("/register", Register)






export default router;