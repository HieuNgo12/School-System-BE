import mongoose from "mongoose";

const teacherPositionModal = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    code: {
      type: String,
      isUnique: true,
    },
    des: {
      type: String,
    },
    isActive: {
      type: Boolean,
    },
    isDeleted: {
      type: Boolean,
    },
  },
  { autoCreate: true, autoIndex: true }
);

const TeacherPositionModal = mongoose.model(
  "teacherPosition",
  teacherPositionModal
);
export default TeacherPositionModal;
