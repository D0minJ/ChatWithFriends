import {Request, Response, NextFunction} from "express"
import statusCode from "http-status-codes"
import jwt from "jsonwebtoken"


// interface JwtPayload {
//     email: string
// }

// interface UserAuthInfoRequest extends Request{
//     email: string
// }



export const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"];
    if(!header) return res.sendStatus(statusCode.UNAUTHORIZED);
    const token = header.split(' ')[1]

    try{
        jwt.verify(token, process.env.JWT_ACCESS_SECRET!) 
        
        next();

    }catch(err){

        return res.sendStatus(statusCode.FORBIDDEN);

    }
}