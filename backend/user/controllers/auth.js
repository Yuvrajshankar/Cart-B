import bcrypt from "bcryptjs";
import { generateToken } from "../token/generateToken.js";
import User from "../schema/User.js";

//register
export const register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        const UserExists = await User.findOne({ email: email });
        if (UserExists) {
            return res.status(409).json({ message: 'User Already Exists' });
        };

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        if (newUser) {
            res.status(201).json({ newUser });
        } else {
            res.status(400);
            throw new Error('Invalid User Data');
        };
    } catch (error) {
        next(error);
    }
};

//login
export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            req.status(400).json({ msg: "User Does not Exist" });
        }

        const matchedPassword = await bcrypt.compare(password, user.password);
        if (!matchedPassword) {
            res.status(400).json({ msg: "Invalid Credentials." });
        }

        generateToken(res, user._id);
        delete user.password;
        res.status(200).json({ user });
    } catch (error) {
        next(error);
    }
};

//update
export const update = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const user = req.user;
        if (!user) {
            return res.status(404).json({ message: "Admin not found" });
        }

        // update
        user.name = name || user.name;
        user.email = email || user.email;

        if (password) {
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);
            user.password = hashedPassword;
        }
        const updatedUser = await user.save();
        delete updatedUser.password;
        return res.status(200).json({ user: updatedUser, message: 'User updated Successfully' });
    } catch (error) {
        next(error);
    }
}

//logout
export const logout = async (req, res, next) => {
    try {
        res.clearCookie('user_jwt');
        return res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        next(error);
    }
};


// get user-data
export const getUserData = async (req, res, next) => {
    try {
        const user = req.user;

        if (!user) {
            return res.status(404).json({ message: "User not Found" });
        }

        const userData = {
            name: user.name,
            email: user.email,
            cart: user.cart,
            Bought: user.Bought,
        };
        res.status(200).json({ user: userData });
    } catch (error) {
        next(error)
    }
};


// already logged In
export const alreadyUser = async (req, res, next) => {
    try {
        const user = req.user;

        if (user) {
            return res.json({
                email: user.email,
            });
        }
    } catch (error) {
        next(error);
    }
};