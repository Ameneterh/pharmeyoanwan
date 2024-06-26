import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  createmotivational,
  getmotivational,
  getmotivationalbyid,
  updatemotivational,
  deletemotivational,
  likemotivational,
} from "../controllers/motivational.controller.js";

const router = express.Router();

router.post("/create-motivation", verifyToken, createmotivational);
router.get("/getmotivation", getmotivational);
router.put("/likemotivation/:motivationId", verifyToken, likemotivational);
router.get("/:motivationId", getmotivationalbyid);
router.put(
  "/updatemotivation/:motivationId/:userId",
  verifyToken,
  updatemotivational
);
router.delete(
  "/deletemotivation/:motivationId/:userId",
  verifyToken,
  deletemotivational
);

export default router;
