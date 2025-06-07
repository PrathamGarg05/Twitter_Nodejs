import { StatusCodes } from "http-status-codes";
import { errorResponse, successResponse } from "../utils/Response";


export const signupUser = async (req , req) => {
    try{
        const response = await registerUserService({
            username : req.body.username,
            password : req.body.password,
            email : req.body.email
        });

        return successResponse(response, StatusCodes.CREATED, "User signed up successfully", res);
    } catch(error){
        return errorResponse(error, res);
    }
};

export const signinUser = async (req , req) => {
    try{
        const response = await loginUserService({
            username : req.body.username,
            password : req.body.password,
        });

        return successResponse(response, StatusCodes.OK, "User signed in successfully", res);
    } catch(error){
        return errorResponse(error, res);
    }
};