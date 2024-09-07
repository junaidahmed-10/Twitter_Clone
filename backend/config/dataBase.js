import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path: "../config/.env"
})

const connectDataBase = () => {
    mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((error) => console.log("failed Connection", error))
}
export default connectDataBase;