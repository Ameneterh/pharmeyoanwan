import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { logout, updateUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/logout", logout);
router.put("/update/:userId", verifyToken, updateUser);

export default router;
