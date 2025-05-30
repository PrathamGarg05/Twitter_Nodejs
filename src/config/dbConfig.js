import mongoose, { mongo } from "mongoose";
import { MONGO_URL } from "./serverConfig.js";

export default async function connectDB(){
    try{
        await mongoose.connect(MONGO_URL);
        console.log("db connection successful")
    } catch(error){
        console.log("Failed to connect to db");
        console.log(error);
    }
}