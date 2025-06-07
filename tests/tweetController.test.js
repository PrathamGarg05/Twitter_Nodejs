import { getTweets } from "../src/controllers/tweetController.js";
import { getTweetsService } from "../src/services/tweetService.js";
import { mockRequest, mockResponse } from "./mocker.js"

jest.mock("../src/services/tweetService.js" , () => ({
    
    // We are harcoring the response from this function to be
    // what we want -> this will be the actual res for test
    
    getTweetsService: jest.fn().mockResolvedValue([
        {
            content : "Tweet 1"
        },
        {
            content : "tweet 2"
        }
    ])
}))

test("shoud return tweets", async() => {
    const req = mockRequest();
    const res = mockResponse();
    

    const response = [
        {
            content : "Tweet 1"
        },
        {
            content : "tweet 2"
        }
    ]

    await getTweets(req,res);

    expect(res.json).toHaveBeenCalledWith({
        success : true,
        message : "tweets fetched successfully",
        data : response
    });
})

test("should handle error when getTweet fails", async() => {
    const req = mockRequest();
    const res = mockResponse();

    getTweetsService.mockRejectedValue(new Error("server error"));

    await getTweets(req,res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
        message: "server error",
        success : false,
        
    });
})