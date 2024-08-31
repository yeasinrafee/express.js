import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { EnrolledCourseServices } from './enrolledCourse.service';
import sendResponse from '../../utils/sendResponse';

const createEnrolledCourse = catchAsync(async (req, res) => {
  const userId = req.user.userId;
  const result = await EnrolledCourseServices.createEnrolledCourseIntoDB(
    userId,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course enrolled successfully',
    data: result,
  });
});

export const EnrolledCourseControllers = {
  createEnrolledCourse,
};
