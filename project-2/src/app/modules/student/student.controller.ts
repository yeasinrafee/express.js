import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    // will call service function to send data
    const result = await StudentServices.createStudentIntoDB(studentData);

    //send response
    res.status(200).json({
      success: true,
      message: "Student created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
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
    console.log(err);
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
    console.log(err);
  }
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudents,
};
