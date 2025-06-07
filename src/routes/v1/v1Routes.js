import express from 'express';
import tweetRouter from './tweet.js';
import loginRouter from './login.js'

const router = express.Router();
router.use('/tweets', tweetRouter);
router.use('/login', loginRouter)

export default router;