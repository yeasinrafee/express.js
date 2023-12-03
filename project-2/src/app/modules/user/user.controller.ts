import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student: studentData } = req.body;

    // // Data validation using Joi
    // const { error, value } = studentSchemaJoi.validate(studentData);
    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: "something went wrong",
    //     error: error.details,
    //   });
    // }

    // Data validation using Zod
    // const zodParseData = studentSchemaZod.parse(studentData);

    // will call service function to send data
    const result = await UserServices.createStudentIntoDB(
      password,
      studentData
    );

    //send response
    res.status(200).json({
      success: true,
      message: "Student created successfully",
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

export const UserController = {
  createStudent,
};
