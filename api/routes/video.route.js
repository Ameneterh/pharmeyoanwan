import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  addvideo,
  getvideos,
  updateproject,
  deleteproject,
} from "../controllers/video.controller.js";

const router = express.Router();

router.post("/addvideo", verifyToken, addvideo);
router.get("/getvideos", getvideos);
router.put("/updateproject/:projectId/:userId", verifyToken, updateproject);
router.delete("/deleteproject/:projectId/:userId", verifyToken, deleteproject);

export default router;
