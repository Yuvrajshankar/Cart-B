import jwt from "jsonwebtoken";

export const generateToken = (res, userId) => {
    const userToken = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    });

    res.cookie('user_jwt', userToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: 'strict',
        secure: true,
    });
};