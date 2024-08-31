import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectToMongoDB from "./db/db.js";

import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import userRoutes from "./routes/user.route.js"



const app = express();
dotenv.config();


const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true, //allow cookies to be sent with requests
    optionsSuccessStatus: 200,
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes)

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`server is running on port ${PORT}`);
});