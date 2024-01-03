// dependencies
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import connection from "./db.js";
import { ErrorHandler } from "./errorHandler.js";

//admin
import AdminRoutes from "./admin/Routes/auth.js";
import ProductRoutes from "./admin/Routes/product.js";
import { verifyToken } from "./admin/token/verifyToken.js";
import { createProduct } from "./admin/Controllers/product.js";

//user
import UserRouter from "./user/Routes/auth.js";
import ProductsRoutes from "./user/Routes/user.js";

// configuration
dotenv.config();
const app = express();
const PORT = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//middlewares
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(cookieParser());
app.use("/images", express.static(path.join(__dirname, "IMAGES")));

// multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'IMAGES');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage });

// Routes

//admin
app.use("/admin", AdminRoutes);
app.post("/product/create", verifyToken, upload.single("image"), createProduct);
app.use("/product", ProductRoutes);

// user
app.use("/user", UserRouter);
app.use("/products", ProductsRoutes);

//errorHandler
app.use(ErrorHandler);

//database
connection();

// listen
app.listen(PORT, () => {
    console.log(`Server is running on PORT : ${PORT}`);
});