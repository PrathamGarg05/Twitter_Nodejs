import { Filter } from "bad-words";
import { createTweet as createTweetRepo , getTweets as getTweetsRepo} from "../repository/tweetRepo.js";


export const createTweetService = async ({body, image}) => {
    const filter = new Filter();

    if(filter.isProfane(body)) {
        console.log(body);
        console.log(filter.clean(body));
        throw {
            message : "tweet contains bad word",
            status : 400
        };
    }

    const tweet = await createTweetRepo({body, image});

    return tweet
}

export const getTweetsService = async() => {
     try{
        const tweets = await getTweetsRepo();
        return tweets;  
     }  catch(error) {
        throw {
            message : "Failed to fetch tweets",
            status : 500
        };
     }
}