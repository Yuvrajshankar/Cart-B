import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "Please Enter Your First Name"],
        },
        lastName: {
            type: String,
            required: [true, "Please Enter Your Last Name"],
        },
        mobileNumber: {
            type: Number,
            unique: true,
            required: [true, "Please Enter Your Mobile Number"],
        },
        email: {
            type: String,
            unique: true,
            required: [true, "Please Enter Your Email"],
        },
        password: {
            type: String,
            required: [true, "Please Enter Your Password"],
        },
    },
    { timestamps: true }
);

const Admin = mongoose.model("Admin", AdminSchema);

export default Admin;