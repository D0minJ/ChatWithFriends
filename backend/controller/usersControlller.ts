import {Request, Response} from "express"
import statusCode from "http-status-codes";
import jwt from "jsonwebtoken"
import User from "../Models/User";

interface JwtPayload {
    secureID: string
}


// Get list of users 
const getUsers = async (req: Request, res: Response) => {
    const usersList: any = [];
    const value = req.params.name;
    const cookies = req.cookies;
    const refreshToken = cookies.rtoken;

    if(!refreshToken){
        return res.sendStatus(statusCode.UNAUTHORIZED);
    }
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET!);
    
    const user = await User.findOne({secureID: (decoded as JwtPayload).secureID});

    if(!user){
        return res.sendStatus(statusCode.FORBIDDEN);
    }

    
    try{
        const users = await User.find(
            {
                $and: [
                    {
                        $or: 
                        [
                            {firstname: {$regex: "^" + value, $options: 'i'}},
                            {lastname: {$regex: "^" + value, $options: 'i'}}
                        ]
                    },
                    {
                        userID: { $nin: [user.userID]}
                    }
                ]
                
            });
        users.map((user) => {
            usersList.push({userID: user.userID, firstname: user.firstname, lastname: user.lastname});
        })  
        res.status(statusCode.OK).json(usersList);

    }catch(error){
        

    }
}

export {getUsers}