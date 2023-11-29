// creating schema for joy

import Joi from "joi";

// Define Joi schema for UserName
const userNameSchemaJoi = Joi.object({
  firstName: Joi.string()
    .required()
    .trim()
    .max(20)
    .regex(/^[A-Z][a-z]*$/),
  middleName: Joi.string(),
  lastName: Joi.string().required(),
});

// Define Joi schema for Guardian
const guardianSchemaJoi = Joi.object({
  fatherName: Joi.string().required(),
  fatherOccupation: Joi.string().required(),
  fatherContactNo: Joi.string().required(),
  motherName: Joi.string().required(),
  motherOccupation: Joi.string().required(),
  motherContactNo: Joi.string().required(),
});

// Define Joi schema for LocalGuardian
const localGuardianSchemaJoi = Joi.object({
  name: Joi.string().required(),
  occupation: Joi.string().required(),
  contactNo: Joi.string().required(),
  address: Joi.string().required(),
});

// Define Joi schema for Student
const studentSchemaJoi = Joi.object({
  id: Joi.string().required(),
  name: userNameSchemaJoi.required(),
  gender: Joi.string().valid("male", "female", "others").required(),
  dateOfBirth: Joi.string(),
  email: Joi.string().required(),
  contactNumberNo: Joi.string().required(),
  emergencyContactNo: Joi.string().required(),
  bloodGroup: Joi.string().valid(
    "A+",
    "A-",
    "B+",
    "B-",
    "O+",
    "O-",
    "AB+",
    "AB-"
  ),
  presentAddress: Joi.string().required(),
  permanentAddress: Joi.string().required(),
  guardian: guardianSchemaJoi.required(),
  localGuardian: localGuardianSchemaJoi.required(),
  profileImg: Joi.string(),
  isActive: Joi.string().valid("active", "blocked").default("active"),
});

export default studentSchemaJoi;

////////////////////////////////////////////
