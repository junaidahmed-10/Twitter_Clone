import express from "express"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoute from './routes/userRoute.js'
import TweetRoutes from './routes/TweetRoutes.js'
import connectDataBase from "./config/dataBase.js";
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


//apis
app.use("/api/v1/user", userRoute);
app.use("/api/v1/Tweet", TweetRoutes);
app.get("/home", (req, res) => {
    res.status(200).json({
        message: "coming from backend..."
    })
})

app.listen(process.env.PORT, ()=>{
    console.log(`the app is listening on PORT:${port}`);
})