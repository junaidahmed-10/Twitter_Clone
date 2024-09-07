import express from "express";
// import { Login, logout, Register } from "../controllers/user.controller.js";
import { createTweet, deleteTweet, getAllTweets, getFollowingTweets, likeOrDislike } from "../controllers/tweet.controller.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router();

router.route("/create").post(isAuthenticated, createTweet)
router.route("/delete/:id").delete(isAuthenticated, deleteTweet)
router.route("/like/:id").put(isAuthenticated, likeOrDislike)
router.route("/delete/:id").put(isAuthenticated, likeOrDislike);
router.route("/alltweets/:id").get(isAuthenticated, getAllTweets)
router.route("/followingtweets/:id").get(isAuthenticated, getFollowingTweets)
export default router;