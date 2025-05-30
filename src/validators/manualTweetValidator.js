export const manualCreateTweetValidator = (req,res,next) => {
    if(!req.body.tweet) {
        return res.status(400).json({
            error: 'Tweet is required'
        });
    }

    if(req.body.tweet.length > 50){
        return res.status(400).json({
            error: 'Tweet must be 50 chars or less'
        });
    }

    next();

}