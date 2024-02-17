import jwt from "jsonwebtoken";
import Admin from "../Schema/Admin.js";

export const verifyToken = async (req, res, next) => {
    const AdminToken = req.cookies.admin_jwt;

    if (AdminToken) {
        try {
            const decoded = jwt.verify(AdminToken, process.env.ADMIN_JWT_SECRET, {}); // Add empty options object

            req.admin = await Admin.findById(decoded.adminId).select('-password');
            next();
        } catch (error) {
            next(error);
        }
    } else {
        res.status(401).json({ error: "Not authorized, no token" });
    }
}