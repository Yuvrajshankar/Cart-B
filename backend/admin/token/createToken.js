import jwt from "jsonwebtoken";

export const createToken = (res, adminId) => {
    const adminToken = jwt.sign({ adminId }, process.env.ADMIN_JWT_SECRET, {
        expiresIn: '1d',
    });

    res.cookie('admin_jwt', adminToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: 'strict',
        secure: true,
    });
};