import Admin from "../Schema/Admin.js";
import bcrypt from "bcrypt";
import { createToken } from "../token/createToken.js";

// Register
export const register = async (req, res, next) => {
    try {
        const { firstName, lastName, mobileNumber, email, password } = req.body;

        const AdminExists = await Admin.findOne({ $or: [{ email }, { mobileNumber }] });

        if (AdminExists) {
            return res.status(409).json({ message: 'Admin with the same email or mobile number already exists' });
        };

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const newAdmin = await Admin.create({
            firstName,
            lastName,
            mobileNumber,
            email,
            password: hashedPassword,
        });

        if (newAdmin) {
            res.status(201).json({ newAdmin });
        } else {
            res.status(400);
            throw new Error('Invalid user Data');
        };
    } catch (error) {
        next(error);
    }
};

// Login
export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const admin = await Admin.findOne({ email: email });
        if (!admin) {
            req.status(400).json({ msg: "Admin Does not Exist" });
        }

        const matchPass = await bcrypt.compare(password, admin.password);
        if (!matchPass) {
            res.status(400).json({ msg: "Invalid Credentials." });
        };

        createToken(res, admin._id);
        delete admin.password;
        res.status(200).json({ admin });
    } catch (error) {
        next(error);
    }
};

// Update
export const update = async (req, res, next) => {
    try {
        const { firstName, lastName, mobileNumber, email, password } = req.body;

        const admin = req.admin;
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        // update Admin Info
        admin.firstName = firstName || admin.firstName;
        admin.lastName = lastName || admin.lastName;
        admin.mobileNumber = mobileNumber || admin.mobileNumber;
        admin.email = email || admin.email;

        // Check if a new password is provided and update it
        if (password) {
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);
            admin.password = hashedPassword;
        }
        const updatedAdmin = await admin.save();
        delete updatedAdmin.password;
        return res.status(200).json({ admin: updatedAdmin, message: 'Admin updated successfully' });
    } catch (error) {
        next(error);
    }
};

// Logout
export const logout = async (req, res, next) => {
    try {
        res.clearCookie('admin_jwt');
        return res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        next(error);
    }
};

//getUserData
export const getUserData = async (req, res, next) => {
    try {
        const admin = req.admin;

        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        // Exclude sensitive information like password
        const userData = {
            firstName: admin.firstName,
            lastName: admin.lastName,
            mobileNumber: admin.mobileNumber,
            email: admin.email,
        };

        res.status(200).json({ user: userData });
    } catch (error) {
        next(error);
    }
};