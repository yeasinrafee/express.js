import { z } from 'zod';

// Define Zod schema for UserName
const userNameSchemaZod = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .refine(
      (value) => value.charAt(0).toUpperCase() + value.slice(1) === value,
      {
        message: 'First name must be in capitalized format',
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
    password: z.string().max(20).optional(),
    student: z.object({
      name: userNameSchemaZod,
      gender: z
        .enum(['male', 'female', 'others'])
        .refine((value) => value !== undefined, {
          message: 'Gender must be either male, female, or others',
        }),
      dateOfBirth: z.string().optional(),
      email: z.string().email(),
      contactNumberNo: z.string(),
      emergencyContactNo: z.string(),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'])
        .optional(),
      presentAddress: z.string(),
      permanentAddress: z.string(),
      guardian: guardianSchemaZod,
      localGuardian: localGuardianSchemaZod,
      admissionSemester: z.string(),
      profileImg: z.string(),
      academicDepartment: z.string(),
    }),
  }),
});

const updateStudentSchemaZod = z.object({
  body: z.object({
    student: z.object({
      name: userNameSchemaZod.optional(),
      gender: z
        .enum(['male', 'female', 'others'])
        .refine((value) => value !== undefined, {
          message: 'Gender must be either male, female, or others',
        })
        .optional(),
      dateOfBirth: z.string().optional(),
      email: z.string().email().optional(),
      contactNumberNo: z.string().optional(),
      emergencyContactNo: z.string().optional(),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'])
        .optional(),
      presentAddress: z.string().optional(),
      permanentAddress: z.string().optional(),
      guardian: guardianSchemaZod.optional(),
      localGuardian: localGuardianSchemaZod.optional(),
      admissionSemester: z.string().optional(),
      profileImg: z.string().optional(),
      academicDepartment: z.string().optional(),
    }),
  }),
});

export const studentValidations = {
  createStudentSchemaZod,
  updateStudentSchemaZod,
};
