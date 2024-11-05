import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const teacherModal = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    code: {
      type: String,
      unique: true, index: true,
      default: () => uuidv4(),
    },
    startDate: {
      type: Date,
      default: () => Date.now(),
    },
    endDate: {
      type: Date,
      default: null,
    },
    teacherPositionsId: [
      { type: mongoose.Schema.Types.ObjectId, ref: "teacherPosition" },
    ],
    degrees: [
      {
        type: {
          type: String,
        },
        school: {
          type: String,
        },
        major: {
          type: String,
        },
        year: {
          type: Number,
        },
        isGraduated: {
          type: Boolean,
        },
      },
    ],
  },
  { autoCreate: true, autoIndex: true }
);

const TeacherModal = mongoose.model("teacher", teacherModal);
export default TeacherModal;
