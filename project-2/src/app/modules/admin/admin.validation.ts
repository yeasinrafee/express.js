import { z } from "zod";

// Define Zod schema for UserName
const createUserNameSchemaZod = z.object({
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

// Define Zod schema for Student
const createAdminSchemaZod = z.object({
  body: z.object({
    password: z.string().max(20),
    admin: z.object({
      name: createUserNameSchemaZod,
      gender: z
        .enum(["male", "female", "others"])
        .refine((value) => value !== undefined, {
          message: "Gender must be either male, female, or others",
        }),
      dateOfBirth: z.string().optional(),
      email: z.string().email(),
      contactNumberNo: z.string(),
      emergencyContactNo: z.string(),
      bloodGroup: z
        .enum(["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"])
        .optional(),
      presentAddress: z.string(),
      permanentAddress: z.string(),
      designation: z.string(),
      profileImg: z.string(),
    }),
  }),
});

const updateUserNameSchemaZod = z.object({
  firstName: z.string().min(1).max(20).optional(),
  middleName: z.string().optional(),
  lastName: z.string().optional(),
});

const updateAdminSchemaZod = z.object({
  body: z.object({
    admin: z.object({
      name: updateUserNameSchemaZod.optional(),
      gender: z
        .enum(["male", "female", "others"])
        .refine((value) => value !== undefined, {
          message: "Gender must be either male, female, or others",
        })
        .optional(),
      dateOfBirth: z.string().optional(),
      email: z.string().email().optional(),
      contactNumberNo: z.string().optional(),
      emergencyContactNo: z.string().optional(),
      bloodGroup: z
        .enum(["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"])
        .optional(),
      presentAddress: z.string().optional(),
      permanentAddress: z.string().optional(),
      designation: z.string().optional(),
      profileImg: z.string().optional(),
    }),
  }),
});

export const AdminValidations = {
  createAdminSchemaZod,
  updateAdminSchemaZod,
};
