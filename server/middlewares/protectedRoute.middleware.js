import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
const protectedRoute = async (req, res, next) => {
    try {

        const token = req.cookies?.jwt || req.header('Authorization')?.replace("Bearer ", "");

        if (!token) {
            return res.status(401).json({ error: "Unauthorized request: No token provided" });
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decodedToken?.userId).select("-password ")

        if (!user) {
            return res.status(401).json({ error: "invalid token -Unauthorized" })
        }

        req.user = user;
        next();
    } catch (error) {
        console.log("Error is protectedRoute Middelware: ", error.stack || error.message);
        return res.status(500).json({ error: "Internal server error" });
    }

}

export default protectedRoute;