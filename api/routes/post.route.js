import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  createPost,
  getposts,
  updatepost,
  deletepost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create-post", verifyToken, createPost);
router.get("/getposts", getposts);
router.put("/updatepost/:postId/:userId", verifyToken, updatepost);
router.delete("/deletepost/:postId/:userId", verifyToken, deletepost);

export default router;
