import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        cart: {
            type: Array,
            default: [],
        },
        Bought: {
            type: Array,
            default: [],
        },
    },
);

const User = mongoose.model("User", userSchema);

export default User;