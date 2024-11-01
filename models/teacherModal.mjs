import mongoose from "mongoose";
const teacherModal = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    isActive: {
      type: Boolean,
    },
    isDeleted: {
      type: Boolean,
    },
    code: {
      type: String,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
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
