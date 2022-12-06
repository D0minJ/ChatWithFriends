import {Request, Response} from "express"
import User from "../Models/User" 
import bcrypt from "bcrypt"
import statusCode from "http-status-codes"
import ValidateRegister from "../validation/register-validate"
import ValidateLogin from "../validation/login-validate"
import jwt from "jsonwebtoken"



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

        const token = await jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET!, {expiresIn: 31556926});

        return res.status(statusCode.CREATED).json({
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email
        });
    }catch(err){
        console.log(err);
        return res.status(statusCode.BAD_REQUEST).json({error: "User already exists"});
    }
}

const Login = async (req: Request, res: Response) => {
    const {email, password} = req.body;
    const {error, isValid} = ValidateLogin(req.body);

    if(!isValid){
        return res.status(statusCode.BAD_REQUEST).json(error);
    }

    const user = await User.findOne({ email });
    if(!user){
        return res.status(statusCode.NOT_FOUND).json({error: "User does not exists"})
    }


    const isMatch = await bcrypt.compare(password, user.password);
    
    if(isMatch){
        const token = jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET!, {expiresIn: 31556926})

        return res.status(statusCode.OK).json({msg: "Hello " + user.firstname + "."})
    }
    else{
        return res.status(statusCode.BAD_REQUEST).json({error: "Password Incorrect"})
    }
}

export {Register, Login};
