import Product from "../../admin/Schema/Product.js";
import User from "../Schema/user.js";

// get all product
export const getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.status(200).json({ products });
    } catch (error) {
        next(error);
    }
};

// get one product
export const getOneProduct = async (req, res, next) => {
    try {
        const productId = req.params.productId;
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ product });
    } catch (error) {
        next(error);
    }
};

// add to cart
export const addToCart = async (req, res, next) => {
    try {
        const { productId } = req.params;
        const userId = req.user._id;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const existingProductIndex = user.cart.findIndex(item => item.productId == productId);

        if (existingProductIndex !== -1) {
            user.cart[existingProductIndex].quantity += 1;
        } else {
            user.cart.push({ productId, quantity: 1 });
        }
        await user.save();

        res.status(200).json({ user, message: 'Product added to cart successfully.' });
    } catch (error) {
        next(error);
    }
};

//remove from cart
export const removeFromCart = async (req, res, next) => {
    try {
        const { productId } = req.params;
        const userId = req.user._id;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User Not Found." });
        }

        const productIndex = user.cart.findIndex(item => item.productId == productId);

        if (productIndex !== -1) {
            user.cart.splice(productIndex, 1);
            await user.save();

            res.status(200).json({ user, message: 'Product removed from cart successfully.' });
        }
        else {
            res.status(404).json({ message: 'Product not found in the cart' });
        }
    } catch (error) {
        next(error);
    }
};