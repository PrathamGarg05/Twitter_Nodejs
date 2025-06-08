import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "my_jwt_token";

export const authenticateToken = (req,res,next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message : "Access token required"
        });
    }
    try{
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; //attach decoded user to req object
        next();
    } catch(error){
        return res.status(StatusCodes.FORBIDDEN).json({
            message : "Invalid or expired token"
        });
    }
};