import express from "express";
import teacherPositionController from "../controllers/teacherPositionController.mjs";

const router = express.Router();

router.get("/", teacherPositionController.getTeacherPositions);
router.post("/", teacherPositionController.postTeacherPosition);
router.post("/initialize",teacherPositionController.initializeTeacherData);

export default router;
