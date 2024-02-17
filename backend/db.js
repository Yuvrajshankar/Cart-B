import mongoose from "mongoose";

const Connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MONGODB DATABASE CONNECTED SUCCESSFULLY');
    } catch (error) {
        console.error(`${error} did not connect`);
    }
};

export default Connection;