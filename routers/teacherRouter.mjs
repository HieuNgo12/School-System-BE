import express from "express";
import teacherController from "../controllers/teacherController.mjs";
import teacherPositionController from "../controllers/teacherPositionController.mjs";

const router = express.Router();

router.get("/", teacherController.getTeachers);
router.post("/", teacherController.postTeacher);
router.post("/initialize", teacherController.initializeTeacherData);
router.post("/initializeUser",teacherPositionController.initializeUserData);

export default router;
