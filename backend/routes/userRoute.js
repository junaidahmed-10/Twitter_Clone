import express from "express";
import { bookmark, follow, getMyProfile, getOthersProfile, Login, logout, Register, unfollow } from "../controllers/user.controller.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router();

router.route("/register").post(Register)
router.route("/login").post(Login)
router.route("/logout").get(logout)
router.route("/bookmark/:id").put(isAuthenticated, bookmark);
router.route("/profile/:id").get(isAuthenticated, getMyProfile);
router.route("/otheruser/:id").get(isAuthenticated, getOthersProfile);
router.route("/follow/:id").post(isAuthenticated, follow);
router.route("/unfollow/:id").post(isAuthenticated, unfollow)

export default router;