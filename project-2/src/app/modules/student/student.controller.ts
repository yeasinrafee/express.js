import { Request, Response } from "express";
import { StudentServices } from "./student.service";
import studentSchemaJoi from "./student.joivalidation";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    //JOi
    const { error } = studentSchemaJoi.validate(studentData);
    if (error) {
      res.status(500).json({
        success: false,
        message: "something went wrong",
        error: error.details,
      });
    }

    // will call service function to send data
    const result = await StudentServices.createStudentIntoDB(studentData);

    //send response
    res.status(200).json({
      success: true,
      message: "Student created successfully",
      data: result,
    });
  } catch (err) {
    //send response
    res.status(200).json({
      success: false,
      message: "Something went wrong",
      data: err,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    //send response
    res.status(200).json({
      success: true,
      message: "Student are retrieved successfully",
      data: result,
    });
  } catch (err) {
    //send response
    res.status(200).json({
      success: false,
      message: "Something went wrong",
      data: err,
    });
  }
};

const getSingleStudents = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    //send response
    res.status(200).json({
      success: true,
      message: "Student is retrieved successfully",
      data: result,
    });
  } catch (err) {
    //send response
    res.status(200).json({
      success: false,
      message: "Something went wrong",
      data: err,
    });
  }
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudents,
};
