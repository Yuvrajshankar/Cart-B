// IMPORTS
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import Connection from "./db.js";
import { ErrorHandler } from "./errorHandler.js";

/* admin */
import AdminRoutes from "./admin/routes/auth.js";
import ProductRoutes from "./admin/routes/product.js";

/* user */
import UserRoutes from "./user/routes/auth.js";
import ProductsRoutes from "./user/routes/user.js";

// CONFIGURATION
dotenv.config();
const app = express();
const PORT = process.env.PORT;

// MIDDLEWARES
app.use(express.json());
app.use(cookieParser());

// ROUTES

/* admin */
app.use("/admin", AdminRoutes);
app.use("/product", ProductRoutes);

/* user */
app.use("/user", UserRoutes);
app.use("/products", ProductsRoutes);

/* errorHandling */
app.use(ErrorHandler);

// --------------- Deployment ---------------
const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname1, "/frontend/build")));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"));
    })
} else {
    console.log("API is Running Successfully");
}

// LISTEN
Connection();

app.listen(PORT, () => {
    console.log(`Server is running on PORT : ${PORT}`);
});