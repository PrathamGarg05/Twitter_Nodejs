import { Filter } from "bad-words";
import { createTweet as createTweetRepo } from "../repository/tweetRepo.js";

export const createTweetService = async ({body}) => {
    const filter = new Filter();

    if(filter.isProfane(body)) {
        console.log(body);
        console.log(filter.clean(body));
        throw {
            message : "tweet contains bad word",
            status : 400
        };
    }

    const tweet = await createTweetRepo({body});

    return tweet
}