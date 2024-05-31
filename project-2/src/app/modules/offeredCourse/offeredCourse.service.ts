import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TOfferedCourse } from './offeredCourse.interface';
import { OfferedCourse } from './offeredCourse.model';
import { SemesterRegistration } from '../semesterRegistration/semesterRegistration.model';
import { AcademicFaculty } from '../academicFaculty/academicFaculty.model';
import { AcademicDepartment } from '../academicDepartment/academicDepartment.model';
import { Course } from '../course/course.model';
import { Faculty } from '../faculty/faculty.model';

const createOfferedCourseIntoDB = async (payload: TOfferedCourse) => {
  const {
    semesterRegistration,
    academicFaculty,
    academicDepartment,
    course,
    faculty,
  } = payload;
  //check if the semester registration id is exist
  const isSemesterRegistrationExist = await SemesterRegistration.findById(
    semesterRegistration
  );
  if (!isSemesterRegistrationExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'This semester is not found!');
  }

  const academicSemester = isSemesterRegistrationExist.academicSemester;

  //check if the academic faculty id is exist
  const isAcademicFacultyExist = await AcademicFaculty.findById(
    academicFaculty
  );
  if (!isAcademicFacultyExist) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'This academic faculty is not found!'
    );
  }

  //check if the academic department id is exist
  const isAcademicDepartmentExist = await AcademicDepartment.findById(
    academicDepartment
  );
  if (!isAcademicDepartmentExist) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'This academic department is not found!'
    );
  }

  //check if the course id is exist
  const isCourseExist = await Course.findById(course);
  if (!isCourseExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'This course is not found!');
  }

  //check if the faculty id is exist
  const isFacultyExist = await Faculty.findById(faculty);
  if (!isFacultyExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'This faculty is not found!');
  }

  const result = await OfferedCourse.create({ ...payload, academicSemester });
  return result;
};

const getAllOfferedCoursesFromDB = async (query: Record<string, unknown>) => {};

const getSingleOfferedCourseFromDB = async (id: string) => {};

const updateOfferedCourseIntoDB = async (
  id: string,
  payload: Partial<TOfferedCourse>
) => {};

export const OfferedCourseServices = {
  createOfferedCourseIntoDB,
  getAllOfferedCoursesFromDB,
  getSingleOfferedCourseFromDB,
  updateOfferedCourseIntoDB,
};
