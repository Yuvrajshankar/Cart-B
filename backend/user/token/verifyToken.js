import jwt from "jsonwebtoken";
import User from "../schema/User.js";

export const jwtVerify = async (req, res, next) => {
    const UserToken = req.cookies.user_jwt;

    if (UserToken) {
        try {
            const decoded = jwt.verify(UserToken, process.env.JWT_SECRET, {});

            req.user = await User.findById(decoded.userId).select('-password');
            next();
        } catch (error) {
            next(error);
        }
    } else {
        res.status(401).json({ error: "Not authorized, no token" });
    }
};