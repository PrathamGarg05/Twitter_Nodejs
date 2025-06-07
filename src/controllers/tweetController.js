import { StatusCodes } from "http-status-codes";
import { createTweetService, getTweetsService } from "../services/tweetService.js";
import { errorResponse, successResponse } from "../utils/Response.js";


export const getTweetsById = (req,res) => {
    return res.json({
        message : "Welcome to tweet route",
        id : req.params.id
    });
}

export const createTweet = async (req,res) => {
    try{
        const response = await createTweetService({
            body : req.body.body,
            image : req.file?.location,
        });
        return successResponse(response, StatusCodes.CREATED, "tweet created successfully", res);
    }catch(error){
        return errorResponse(error,res);
    }
}

export const getTweets = async (req,res) => {
    try{
        const response = await getTweetsService();
        return successResponse(response, StatusCodes.OK, "tweets fetched successfully", res);
    } catch(error) {
        // console.log(error);
        return errorResponse(error,res);
    }
}