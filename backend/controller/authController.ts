import {Request, Response} from "express"
import User from "../Models/User" 
import bcrypt from "bcrypt"
import statusCode from "http-status-codes"
import ValidateRegister from "../validation/registerValidate"
import ValidateLogin from "../validation/loginValidate"
import jwt from "jsonwebtoken"



const register = async (req: Request, res: Response) => {
    const {firstname, lastname, email, password} = req.body;
    const {error, isValid} = ValidateRegister(req.body);

    if(!isValid){
        return res.status(statusCode.BAD_REQUEST).json(error)
    }

    try{
        const accessToken = jwt.sign({email: email}, process.env.JWT_ACCESS_SECRET!, {expiresIn: "1h"});
        const refreshToken = jwt.sign({email: email}, process.env.JWT_REFRESH_SECRET!, {expiresIn: "1d"});

        const hashPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            firstname,
            lastname,
            email,
            password: hashPassword,
            refreshToken: {token: refreshToken, dateCreatedToken: new Date(Date.now()), tokenExpire: new Date(Date.now() + 86400000)}
        });

        res.cookie("jwt", refreshToken, {httpOnly: true, sameSite: "none", secure: true, maxAge: 24 * 60 * 60 * 1000})
        res.status(statusCode.OK).json({accessToken: accessToken})
        
    }catch(err: any){
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
        return res.status(statusCode.BAD_REQUEST).json({error: "Incorrect password or email"})
    }


    const isMatch = await bcrypt.compare(password, user.password);
    
    if(!isMatch){
        return res.status(statusCode.BAD_REQUEST).json({error: "Incorrect password or email"})
    }
    else{
        const accessToken = jwt.sign({email: user.email}, process.env.JWT_ACCESS_SECRET!, {expiresIn: "1h"});
        const refreshToken = jwt.sign({email: user.email}, process.env.JWT_REFRESH_SECRET!, {expiresIn: "1d"});

        await User.findOneAndUpdate({email: user.email}, {refreshToken:{token: refreshToken, dateCreatedToken: new Date(Date.now()), tokenExpire: new Date(Date.now() + 86400000)}})

        res.cookie("jwt", refreshToken, {httpOnly: true, sameSite: "none", secure: true, maxAge: 24 * 60 * 60 * 1000})
        res.status(statusCode.OK).json({accessToken: accessToken})
    }
}

export {register, login};
