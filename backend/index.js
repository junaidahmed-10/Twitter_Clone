import express from "express"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoute from './routes/userRoute.js'
import TweetRoutes from './routes/TweetRoutes.js'
import connectDataBase from "./config/dataBase.js";
import cors from 'cors';
dotenv.config({
    path: ".env"
})
connectDataBase();
const app = express();

const port = 3000;

//middleware
app.use(express.urlencoded({
    extended: true,
}))
app.use(express.json()) 
app.use(cookieParser());


const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
}
app.use(cors(corsOptions))


//apis
app.use("/api/v1/user", userRoute);
app.use("/api/v1/Tweet", TweetRoutes);
app.get("/home", (req, res) => {
    res.status(200).json({
        message: "coming from backend..."
    })
})

app.listen(process.env.PORT || 3000 , () => {
    console.log(`the app is listening on PORT:${port}`);
})