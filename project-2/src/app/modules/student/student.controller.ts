import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    //send response
    res.status(200).json({
      success: true,
      message: "Student are retrieved successfully",
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    //send response
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    //send response
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      data: err,
    });
  }
};

const deleteStudents = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);
    //send response
    res.status(200).json({
      success: true,
      message: "Student is deleted successfully",
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    //send response
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      data: err,
    });
  }
};

export const StudentController = {
  getAllStudents,
  getSingleStudents,
  deleteStudents,
};
