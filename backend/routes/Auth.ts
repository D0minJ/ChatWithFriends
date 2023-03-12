import express from "express"
import {login, register, islogged, logout} from "../controller/authController"


const router = express.Router()



router.post("/register", register);


router.post("/login", login);


router.get("/logged", islogged);

router.get("/logout", logout);



export default router;