import express from "express"
import {handleRefreshToken} from "../controller/tokenController"


const router = express.Router()

// RENEW ACCESS TOKEN
router.get("/renewtoken", handleRefreshToken)



export default router;