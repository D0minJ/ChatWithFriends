import express from "express"
import {GetRegister} from "../controller/Auth-Controller"


const router = express.Router()



router.get("/register", GetRegister)

router.get("/login")




export default router;