import express from "express";
import protectedRoute from "../middlewares/protectedRoute.middleware.js";
import { getUsersForSidebar, getRecentChats } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectedRoute, getUsersForSidebar);
router.get("/recents", protectedRoute, getRecentChats)

export default router;

