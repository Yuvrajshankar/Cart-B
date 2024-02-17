import Product from "../schema/Product.js";

// create Product
export const createProduct = async (req, res, next) => {
    try {
        const { image, title, description, price, category, stock } = req.body;
        const adminId = req.admin._id;

        const newProduct = await Product.create({
            admin: adminId,
            image,
            title,
            description,
            price,
            category,
            stock,
        });
        res.status(201).json({ product: newProduct, message: 'Product created successfully' });
    } catch (error) {
        next(error);
    }
};


// update Product
export const updateProduct = async (req, res, next) => {
    try {
        const productId = req.params.id;
        const updatedDetails = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(productId, updatedDetails, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ product: updatedProduct, message: "Product updated successfully" });
    } catch (error) {
        next(error);
    }
};


// delete Product
export const deleteProduct = async (req, res, next) => {
    try {
        const productId = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not Found" });
        }

        res.status(200).json({ product: deletedProduct, message: "Product Deleted Successfully." });
    } catch (error) {
        next(error);
    }
};


// get all the Product
export const allProduct = async (req, res, next) => {
    try {
        const adminId = req.admin._id;
        const products = await Product.find({ admin: adminId });
        res.status(200).json({ products });
    } catch (error) {
        next(error);
    }
};


// get one Product
export const oneProduct = async (req, res, next) => {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ product });
    } catch (error) {
        next(error);
    }
};

