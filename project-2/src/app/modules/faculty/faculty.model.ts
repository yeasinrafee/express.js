import { Schema, model } from "mongoose";
import { FacultyModel, TFaculty, TUserName } from "./faculty.interface";

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, "First Name is Required"],
    trim: true,
    maxlength: [20, "First name can not be more than 20 characters"],
  },
  middleName: { type: String, trim: true },
  lastName: {
    type: String,
    trim: true,
    required: [true, "Last Name is required"],
    maxlength: [20, "Name can not be more than 20 characters"],
  },
});

const facultySchema = new Schema<TFaculty, FacultyModel>(
  {
    id: { type: String, required: [true, "Id is required"], unique: true },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, "User is required"],
      unique: true,
      ref: "User",
    },
    name: {
      type: userNameSchema,
      required: true,
    },
    gender: {
      type: String,
      enum: {
        values: ["male", "female", "other"],
        message:
          "{VALUE} is not valid. Gender must be either male or female and others.",
      },
      required: [true, "Gender is required"],
    },
    dateOfBirth: { type: Date },
    email: { type: String, required: true, unique: true },
    contactNumberNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: {
      type: String,
      enum: {
        values: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
        message: "{VALUE} is not a valid blood group",
      },
    },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    academicDepartment: {
      type: Schema.Types.ObjectId,
      ref: "AcademicDepartment",
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: "AcademicFaculty",
    },
    designation: {
      type: String,
      required: true,
    },
    profileImg: { type: String },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// virtual
facultySchema.virtual("fullName").get(function () {
  return `${this?.name?.firstName} ${this?.name?.middleName} ${this?.name?.lastName}`;
});

// Query Middleware
facultySchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

facultySchema.pre("findOne", function (next) {
  this.findOne({ isDeleted: { $ne: true } }); // this will not work on aggregations
  next();
});

facultySchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

// creating a custom static method
facultySchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Faculty.findOne({ id });
  return existingUser;
};

// Student Model
export const Faculty = model<TFaculty, FacultyModel>("Faculty", facultySchema);
