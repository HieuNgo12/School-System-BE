import mongoose from "mongoose";

const userModal = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true, index: true,
    },
    phoneNumber: {
      type: String,
    },
    address: {
      type: String,
    },
    identity: {
      type: String,
    },
    dob: {
      type: Date,
    },
    isDeleted: {
      type: Boolean,
    },
    role: {
      type: String,
      enum: ["STUDENT", "TEACHER", "ADMIN"],
    },
  },
  { autoCreate: true, autoIndex: true }
);

const UserModal = mongoose.model("user", userModal);
export default UserModal;
