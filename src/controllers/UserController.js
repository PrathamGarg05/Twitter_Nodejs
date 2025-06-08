import { StatusCodes } from "http-status-codes";
import { errorResponse, successResponse } from "../utils/Response.js";
import { siginService, signupService } from "../services/UserService.js";


export const signupUser = async (req , res) => {
    try{
        const response = await signupService({
            username : req.body.username,
            password : req.body.password,
            email : req.body.email
        });

        return successResponse(response, StatusCodes.CREATED, "User signed up successfully", res);
    } catch(error){
        return errorResponse(error, res);
    }
};

export const signinUser = async (req , res) => {
    try{
        const {token, user} = await siginService({
            username : req.body.username,
            password : req.body.password,
            email : req.body.email
        });

        res.cookie("token", token,{
            httpOnly: true,
            maxAge: 3600,
            sameSite: "Strict"
        })

        return successResponse(
            { user : { id: user._id, email: user.email,username:user.username}},
            StatusCodes.OK, 
            "User signed in successfully", 
            res);
    } catch(error){
        return errorResponse(error, res);
    }
};