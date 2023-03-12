import {Request, Response} from "express"
import bcrypt from "bcrypt"
import statusCode from "http-status-codes"
import jwt from "jsonwebtoken"
import { v4 as uuidv4 } from "uuid"

import ValidateRegister from "../validation/registerValidate"
import ValidateLogin from "../validation/loginValidate"
import User from "../Models/User"

interface JwtPayload {
    secureID: string
}

const register = async (req: Request, res: Response) => {
    const {firstname, lastname, email, password} = req.body;
    const {error, isValid} = ValidateRegister(req.body);
    const userID = uuidv4();
    const secureID = uuidv4();

    if(!isValid){
        return res.status(statusCode.BAD_REQUEST).json(error);
    }

    try{

        const accessToken = jwt.sign({secureID: secureID}, process.env.JWT_ACCESS_SECRET!, {expiresIn: "1d"});
        const refreshToken = jwt.sign({secureID: secureID}, process.env.JWT_REFRESH_SECRET!, {expiresIn: "30d"});
            
        const hashPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            userID: userID,
            secureID: secureID,
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: hashPassword,
            refreshToken: {
                    token: refreshToken, 
                    dateCreatedToken: new Date(Date.now()), 
                    tokenExpire: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                }
        });

        
        res.cookie("rtoken", refreshToken, {httpOnly: true, sameSite: "none", secure: true, maxAge: 30 * 24 * 60 * 60 * 1000});
        res.cookie("atoken", accessToken, {httpOnly: true, sameSite: "none", secure: true, maxAge: 24 * 60 * 60 * 1000});
        return res.sendStatus(statusCode.OK);
        
    } catch(err: any) {
        if(err.code !== 11000){
            console.log(err);
        }
        return res.status(statusCode.BAD_REQUEST).json({error: "User already exists"});
    }
}

const login = async (req: Request, res: Response) => {
    const {email, password} = req.body;
    const {error, isValid} = ValidateLogin(req.body);

    if(!isValid){
        return res.status(statusCode.BAD_REQUEST).json(error);
    }

    const user = await User.findOne({ email });
    
    if(!user){
        return res.status(statusCode.BAD_REQUEST).json({error: "Incorrect password or email"});
    }


    const isMatch = await bcrypt.compare(password, user.password);
    
    if(!isMatch){
        return res.status(statusCode.BAD_REQUEST).json({error: "Incorrect password or email"});
    } else {

        const accessToken = jwt.sign({secureID: user.secureID}, process.env.JWT_ACCESS_SECRET!, {expiresIn: "1d"});
        const refreshToken = jwt.sign({secureID: user.secureID}, process.env.JWT_REFRESH_SECRET!, {expiresIn: "30d"});

        await User.findOneAndUpdate({email: user.email}, {refreshToken:{token: refreshToken, dateCreatedToken: new Date(Date.now()), tokenExpire: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)}});

        
        res.cookie("rtoken", refreshToken, {httpOnly: true, sameSite: "none", secure: true, maxAge: 30 * 24 * 60 * 60 * 1000});
        res.cookie("atoken", accessToken, {httpOnly: true, sameSite: "none", secure: true, maxAge: 24 * 60 * 60 * 1000});
        return res.sendStatus(statusCode.OK);
    }
}


const logout = async (req: Request, res: Response) => {
    const cookies = req.cookies;
    
    if(!cookies.rtoken){
        return res.status(statusCode.OK).json({error: "no refresh token"});
    }

    try{
        const decoded = jwt.verify(cookies.rtoken, process.env.JWT_REFRESH_SECRET!);
    
        const user = await User.findOneAndUpdate({secureID: (decoded as JwtPayload).secureID}, {refreshToken:{token: "", dateCreatedToken: new Date(0), tokenExpire: new Date(0)}});

        if(!user){
            return res.sendStatus(statusCode.FORBIDDEN);
        }

        res.clearCookie("rtoken", {path: "/"});
        res.clearCookie("atoken", {path: "/"});
        return res.sendStatus(statusCode.OK);

    }catch(err){
        console.log(err);
        return res.sendStatus(statusCode.FORBIDDEN);
    }
}

const islogged = async (req: Request, res: Response) =>{
    const cookies = req.cookies;

    if(!cookies.islogged){
        return res.status(statusCode.OK).json({islogged: false});
    }

    if(cookies.islogged){
        return res.status(statusCode.OK).json({islogged: true});
    }
    
}

export {register, login, islogged, logout};
