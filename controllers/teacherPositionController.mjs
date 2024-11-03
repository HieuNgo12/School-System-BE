import TeacherModal from "../models/teacherModal.mjs";
import TeacherPositionModal from "../models/teacherPositionModal.mjs";
import teacherPositionData from "../mockData/school.teacherpositions.json" with { type: "json" };
import UserModal from "../models/userModal.mjs";
import userData from "../mockData/school.users.json" with { type: "json" };

const teacherPositionController = {
  getTeacherPositions: async (req, res, next) => {
    try {
      const teacherPositions = await TeacherPositionModal.find({});
      res.status(200).send({
        data: teacherPositions,
        message: "Sucessfully fetch teacher positions",
        status: "Success",
      });
    } catch (e) {
      console.log(e);
      res.status(400).send({
        message: e,
        status: "Failed",
      });
    }
  },
  postTeacherPosition: async (req, res, next) => {
    try {
      const teacher = await TeacherPositionModal.create(req.body);
      res.status(200).send(teacher);
    } catch (e) {
      console.log(e);
      res.status(400).send({
        message: e,
        status: "Failed",
      });
    }
  },
  initializeTeacherData: async (req, res, next) => {
    console.log(teacherPositionData);
    try{
        const initialize = await TeacherPositionModal.insertMany(teacherPositionData)
        res.status(200).send({
            data: initialize,
            status:"Success"
        })
    }catch(e){
        console.log(e);
        res.status(400).send({
            message: e,
            status:"Failed"
        })
    }
  },
  initializeUserData: async (req, res, next) => {
    try{
        const initialize = await UserModal.insertMany(userData)
        res.status(200).send({
            data: initialize,
            status:"Success"
        })
    }catch(e){
        console.log(e);
        res.status(400).send({
            message: e,
            status:"Failed"
        })
    }
  },
};

export default teacherPositionController;
