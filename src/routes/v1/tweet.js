import express from 'express';
import { createTweet, getTweets, getTweetsById } from '../../controllers/tweetController.js';
import { tweetZodSchema } from '../../validators/tweetZodSchema.js';
import {validate} from '../../validators/zodValidator.js'
import { s3Uploader } from '../../config/multer.js';
import { authenticateToken } from '../../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authenticateToken, getTweets);

router.get('/:id', getTweetsById);

router.post('/', s3Uploader.single('tweetImage'), validate(tweetZodSchema), createTweet);

export default router; 