import express from "express"
import {renewAccessToken, verifyRefreshToken} from "../controller/tokenController"

const router = express.Router()

router.get("/renewtoken", renewAccessToken)


router.get("/verifytoken", verifyRefreshToken)


export default router;