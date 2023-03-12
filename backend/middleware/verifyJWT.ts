import {Request, Response, NextFunction} from "express"
import statusCode from "http-status-codes"
import jwt from "jsonwebtoken"

export const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
    const cookies = req.cookies;
    const accessToken = cookies.atoken;

    if(!accessToken) {
        return res.sendStatus(statusCode.UNAUTHORIZED);
    };
    
    try{
        jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET!);
        next();
    } catch(err) {
        return res.sendStatus(statusCode.FORBIDDEN);
    }
}