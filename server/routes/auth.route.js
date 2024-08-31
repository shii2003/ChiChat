import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";
import protectedRoute from "../middlewares/protectedRoute.middleware.js";
import multerUpload from "../middlewares/multerUpload.middleware.js";

const router = express.Router();

router.post("/signup", multerUpload.single('profilePicture'), signup);
router.post("/login", login);

//secured routes
router.post("/logout", protectedRoute, logout);


export default router;