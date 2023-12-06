import { z } from "zod";

// Define Zod schema for UserName
const userNameSchemaZod = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .refine(
      (value) => value.charAt(0).toUpperCase() + value.slice(1) === value,
      {
        message: "First name must be in capitalized format",
      }
    ),
  middleName: z.string(),
  lastName: z.string(),
});

// Define Zod schema for Guardian
const guardianSchemaZod = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

// Define Zod schema for LocalGuardian
const localGuardianSchemaZod = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

// Define Zod schema for Student
const createStudentSchemaZod = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: userNameSchemaZod,
      gender: z
        .enum(["male", "female", "others"])
        .refine((value) => value !== undefined, {
          message: "Gender must be either male, female, or others",
        }),
      dateOfBirth: z.date().optional(),
      email: z.string(),
      contactNumberNo: z.string(),
      emergencyContactNo: z.string(),
      bloodGroup: z
        .enum(["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"])
        .optional(),
      presentAddress: z.string(),
      permanentAddress: z.string(),
      guardian: guardianSchemaZod,
      localGuardian: localGuardianSchemaZod,
      profileImg: z.string().optional(),
    }),
  }),
});

export const studentValidations = {
  studentSchemaZod: createStudentSchemaZod,
};
