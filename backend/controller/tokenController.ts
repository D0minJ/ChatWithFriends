import {Request, Response} from "express" 
import jwt from "jsonwebtoken"
import statusCode from "http-status-codes"
import User from "../Models/User"


interface JwtPayload {
    secureID: string
}

const renewAccessToken = async (req: Request, res: Response) => {
    const cookies = req.cookies;
    const refreshToken = cookies.rtoken;
    
    if(!refreshToken) {
        return res.status(statusCode.OK).json({error: "no refresh token"});
    }

    try{
        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET!);

        const user = await User.findOne({secureID: (decoded as JwtPayload).secureID});
        if(!user){
            return res.sendStatus(statusCode.FORBIDDEN);
        }

        const accessToken = jwt.sign({secureID: (decoded as JwtPayload).secureID}, process.env.JWT_ACCESS_SECRET!, {expiresIn: "1h"});

        res.cookie("atoken", accessToken, {httpOnly: true, sameSite: "none", secure: true, maxAge: 24 * 60 * 60 * 1000});
        return res.sendStatus(statusCode.OK);

    }catch(err){
        return res.sendStatus(statusCode.FORBIDDEN);
    }
}


const verifyRefreshToken = async (req: Request, res: Response) => {
    const cookies = req.cookies;
    const refreshToken = cookies.rtoken;
    
    if(!refreshToken){
        return res.status(statusCode.OK).json({error: "no refresh token"});
    }

    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET!, (err: any, decoded: any) => {
        if(err){
            return res.sendStatus(statusCode.FORBIDDEN);
        }else{
            return res.sendStatus(statusCode.OK);
        }
    });

}
export {renewAccessToken, verifyRefreshToken}