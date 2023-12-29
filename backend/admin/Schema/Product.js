import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        admin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Admin",
            required: true,
        },
        image: {
            type: String,
            required: [true, "Please Upload Image For Product"],
        },
        title: {
            type: String,
            required: [true, "Please Enter product Name"],
        },
        description: {
            type: String,
            required: [true, "Please Enter product Description"],
        },
        price: {
            type: Number,
            required: [true, "Please Enter product Price"],
            maxLength: [8, "Price cannot exceed 8 characters"],
        },
        ratings: {
            type: Number,
            default: 0,
        },
        category: {
            type: String,
            required: [true, "Please Enter Product Category"],
        },
        stock: {
            type: Number,
            required: [true, "Please Enter product Stock"],
            default: 0,
        },
        numOfReviews: {
            type: Number,
            default: 0,
        },
        reviews: [
            {
                user: {
                    type: mongoose.Schema.ObjectId,
                    ref: "User",
                    required: true,
                },
                name: {
                    type: String,
                    required: true,
                },
                rating: {
                    type: Number,
                    required: true,
                },
                comment: {
                    type: String,
                    required: true,
                },
                user: {
                    type: mongoose.Schema.ObjectId,
                    ref: "Admin",
                    required: true,
                },
            },
        ],
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;