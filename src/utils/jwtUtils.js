import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || "my_jwt_token";

export const generateToken = (user) => {
    return jwt.sign(
        {id: user._id.toString(), email: user.email},
        JWT_SECRET,
        {expiresIn: "1h"}
    );
}