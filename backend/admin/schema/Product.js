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
        },
        category: {
            type: String,
            required: [true, "Please Enter Product Category"],
        },
        stock: {
            type: Number,
            required: [true, "Please Enter product Stock"],
        },
        numOfReviews: {
            type: Number,
        },
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;