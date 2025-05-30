import express from 'express';
import { createTweet, getTweets, getTweetsById } from '../../controllers/tweetController.js';

const router = express.Router();

router.get('/', getTweets);

router.get('/:id', getTweetsById);

router.post('/', createTweet);

export default router; 