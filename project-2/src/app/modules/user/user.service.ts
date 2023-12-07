import config from "../../config";
import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  const userData: Partial<TUser> = {};

  // if password is not given, use default password
  userData.password = password || (config.default_password as string);
  //set student role
  userData.role = "student";

  const generateStudentId = (payload: TAcademicSemester) => {
    ///
    ///
    ///
    //hello we should code here
    ///
    ///
    ///
  };
  //set manually generated id
  userData.id = "21203083";

  // create a user
  const newUser = await User.create(userData); // Built in static method

  //create a student
  if (Object.keys(newUser).length) {
    // set id, _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id; // reference id
    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
