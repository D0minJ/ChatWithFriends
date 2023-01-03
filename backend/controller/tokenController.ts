import {Request, Response} from "express"
import User from "../Models/User" 
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import statusCode from "http-status-codes"



interface JwtPayload {
    email: string
}

const handleRefreshToken = async (req: Request, res: Response) => {
    const cookies = req.cookies;
    
    if(!cookies.jwt){
        return res.sendStatus(statusCode.UNAUTHORIZED);
    }

    const refreshToken = cookies.jwt;
    
    const user = await User.findOne({token: refreshToken});
    

    if(!user){
        return res.sendStatus(statusCode.FORBIDDEN);
    }

    try{
        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET!);

        if((decoded as JwtPayload).email !== user.email){
            return res.sendStatus(statusCode.FORBIDDEN)
        }

        const accessToken = jwt.sign({"email": (decoded as JwtPayload).email}, process.env.JWT_ACCESS_SECRET!, {expiresIn: "1h"});

        return res.status(statusCode.OK).json({ accessToken });

    }catch(err){
        return res.sendStatus(statusCode.FORBIDDEN)
    }
}

export {handleRefreshToken}