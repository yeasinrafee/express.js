import { Schema, model } from "mongoose";
import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  StudentMethods,
  StudentModel,
  TUserName,
} from "./student.interface";

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, "First Name is Required"],
    trim: true,
    maxlength: [20, "First name can not be more than 20 characters"],

    // custom validation
    validate: {
      validator: function (value: string) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameStr === value;
      },
      message: "{VALUE} is not is capitalized format",
    },
  },
  middleName: { type: String },
  lastName: { type: String, required: [true, "Last name is Required"] },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<TStudent, StudentModel>({
  id: { type: String, required: true, unique: true },
  name: {
    type: userNameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: ["male", "female", "others"],
      message:
        "{VALUE} is not valid. Gender must be either male or female and others.",
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
    default: "active",
  },
});

// pre save middleware /hook

// creating a custom static method
studentSchema.static.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

// creating a custom instance method
// studentSchema.methods.isUserExists = async function (id: string) {
//   const existingUser = await Student.findOne({ id });
//   return existingUser;
// };

// Student Model
export const Student = model<TStudent, StudentModel>("Student", studentSchema);
