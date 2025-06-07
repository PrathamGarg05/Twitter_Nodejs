import { User } from "../schema/User.js";

export const signupRepo = async ({username,password,email}) => {
    try{
        const user = await User.create({
            username, password, email
        });
        return user;
    } catch (error) {
        throw error;
    }
};

export const findUserByEmailRepo = async (email) => {
    try{
        const user = await User.findOne({email});
        return user;
    } catch (error) {
        throw error;
    }
};