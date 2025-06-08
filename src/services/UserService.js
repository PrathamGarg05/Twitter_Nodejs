import { StatusCodes } from "http-status-codes";
import { findUserByEmailRepo, signupRepo } from "../repository/userRepo.js"
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwtUtils.js";

export const signupService = async ({username, password, email}) => {
    const existingUser = await findUserByEmailRepo(email);
    if(existingUser){
        throw{
            message : "Email already in use" , 
            status : StatusCodes.BAD_REQUEST 
        };
    }

    const user = await signupRepo({username, email ,password});
    return user;
}

export const siginService = async ({username,password,email}) => {
    const user = await findUserByEmailRepo(email);
    if (!user){
        throw{
            message : "Invalid email or password",
            status: StatusCodes.BAD_REQUEST
        };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid){
        throw {
            message : "Invalid email or password",
            status : StatusCodes.BAD_REQUEST
        };
    }

    const token = generateToken(user);

    return {
        token,
        user : {id:user._id, email: user.email, username: user.username}
    };
}