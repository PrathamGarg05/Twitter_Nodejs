import mongoose from "mongoose";
import { maxLength, required, trim } from "zod/v4-mini";

const tweetSchema = new mongoose.Schema({
    body : {
        type : String,
        required : true,
        maxLength : 200,
        trim : true
    }
});

export const Tweet = mongoose.model("Tweet", tweetSchema);