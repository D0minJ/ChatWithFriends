import {Request, Response} from "express"
import statusCode from "http-status-codes";
import jwt from "jsonwebtoken"
import User from "../Models/User";


const getUsers = async (req: Request, res: Response) => {
    const value = req.params.name;
    const usersList: any = []

    try{
        const users = await User.find(
            {
                $or: 
                [
                    {firstname: {$regex: "^" + value, $options: 'i'}},
                    {lastname: {$regex: "^" + value, $options: 'i'}}
                ]
            })
        users.map((user) => {
            usersList.push({userID: user.userID, firstname: user.firstname, lastname: user.lastname}) 
        })  
        res.status(statusCode.OK).json(usersList)  

    }catch(error){

    }
}

export {getUsers}