import { TEnrolledCourse } from './enrolledCourse.interface';

const createEnrolledCourseIntoDB = async (
  userId: string,
  payload: TEnrolledCourse
) => {
  // Step 1: Check if the offered course is exist
  // Step 2: Check if the user is enrolled in the offered course
  // Step 3: Create the enrolled course in the database
};

export const EnrolledCourseServices = {
  createEnrolledCourseIntoDB,
};
