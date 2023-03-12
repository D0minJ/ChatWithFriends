import {Request, Response} from "express"
import statusCode from "http-status-codes";
import jwt from "jsonwebtoken"
import User from "../Models/User";

interface JwtPayload {
    secureID: string
}

// Get user credentials
const getUser = async (req: Request, res: Response) => {
    const cookies = req.cookies;
    const refreshToken = cookies.rtoken;

    if(!refreshToken){
        return res.sendStatus(statusCode.UNAUTHORIZED);
    }
    
    try{
        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET!);
    
        const user = await User.findOne({secureID: (decoded as JwtPayload).secureID});

        if(!user){
            return res.sendStatus(statusCode.FORBIDDEN);
        }

        res.status(statusCode.OK).json({
            userID: user.userID,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email
        });

    }catch(err){
        return res.sendStatus(statusCode.FORBIDDEN);
    }
}

export {getUser}






