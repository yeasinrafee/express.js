import { Schema, model } from "mongoose";
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from "./student.interface";

const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: true },
  name: {
    type: userNameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: ["male", "female"],
    },
    required: true,
  },
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNumberNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: {
      values: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
    },
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: {
    type: guardianSchema,
    required: true,
  },
  localGuardian: {
    type: localGuardianSchema,
    required: true,
  },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: ["active", "blocked"],
    required: true,
  },
});

// Student Model
export const StudentModel = model<Student>("Student", studentSchema);
