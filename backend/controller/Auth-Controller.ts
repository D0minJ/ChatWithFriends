import {Request, Response} from "express"
import User from "../Models/User" 
import bcrypt from "bcrypt"
import statusCode from "http-status-codes"
import ValidateRegister from "../validation/register-validate"


const Register = async (req: Request, res: Response) => {
    const {firstname, lastname, email, password} = req.body;

    const {error, isValid} = ValidateRegister(req.body);

    if(!isValid){
        return res.status(statusCode.BAD_REQUEST).json(error)
    }

    try{
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            firstname,
            lastname,
            email,
            password: hashPassword
        });

        return res.status(statusCode.CREATED).json({
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email
        });
    }catch(err){
        console.log(err)
        return res.status(statusCode.BAD_REQUEST).json({error: "User already exists"});
    }

    

}

const Login = async (req: Request, res: Response) => {
    

}

export {Register};
