import express from 'express';

const tweetRouter = express.Router();

tweetRouter.get('/', (req,res) => {
    return res.json({
        message : "Welcome to v2 tweet"
    });
});

tweetRouter.get('/:id', (req,res) => {
    return res.json({
        message : "Welcome to v2 tweet",
        id : req.params.id
    });
});

export default tweetRouter;