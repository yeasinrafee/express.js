import { Model, Types } from "mongoose";

export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};
export type TFaculty = {
  id: string;
  user: Types.ObjectId;
  password: string;
  name: TUserName;
  gender: "male" | "female" | "others";
  dateOfBirth?: Date;
  email: string;
  contactNumberNo: string;
  emergencyContactNo: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-";
  presentAddress: string;
  permanentAddress: string;
  academicDepartment: Types.ObjectId;
  academicFaculty: Types.ObjectId;
  designation: string;
  profileImg?: string;
  isDeleted: boolean;
};

// For creating custom static methods
export interface FacultyModel extends Model<TFaculty> {
  isUserExists(id: string): Promise<TFaculty | null>;
}
