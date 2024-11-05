import TeacherModal from "../models/teacherModal.mjs";
import UserModal from "../models/userModal.mjs";
import teachersData from "../mockData/school.teachers.json" with { type: "json" };
import TeacherPositionModal from "../models/teacherPositionModal.mjs";

const teacherController = {
  getTeachers: async (req, res, next) => {
    try {
        const limit = Number(req.query.limit);
        const page = req.query.page;
        const query = req.query.query;
      const teacher = await TeacherModal.find({}).populate("userId").populate("teacherPositionsId") .limit(limit)
      .skip(limit * (page))
      .sort({
        name: "asc",
      });
      res.status(200).send({
        message: "Teacher fetch Successfully",
        data: teacher,
        status: "Success",
      });
    } catch (e) {
      res.status(404).send({
        message: e,
        status: "Fail",
      });
    }
  },
  postTeacher: async (req, res, next) => {
    try {
      console.log(req.body);
      const userBody = {
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        identity: req.body.identity,
        dob: req.body.dob,
        role: "TEACHER",
      };
      const user = await UserModal.create(userBody);
      const teacherPositionsIds = req.body.teacherPositionsId
      const teacherPositionsIdList = [];
      console.log(teacherPositionsIds);
      for(let i = 0 ; i < teacherPositionsIds.length;i++){
        const teacherPosition = await TeacherPositionModal.findOne({name: teacherPositionsIds[i].label});
        console.log(teacherPosition);
        teacherPositionsIdList.push(teacherPosition._id);
      };
      const degrees = req.body.degrees
      const teacherBody = {
        userId: user._id,
        teacherPositionsId: teacherPositionsIdList,
        isActive: true,
        isDeleted: false,
        degrees: degrees
      };
      const teacher = await TeacherModal.create(teacherBody);

      res.status(200).send({
        message: "Teacher Created Successfully",
        data: teacher,
        status: "Success",
      });
    } catch (e) {
      console.log(e);
      res.status(400).send({
        message: e.message,
        status: "Fail",
      });
    }
  },
  initializeTeacherData: async (req, res, next) => {
    console.log(teachersData);
    try{
        const initialize = await TeacherModal.insertMany(teachersData)
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

export default teacherController;
