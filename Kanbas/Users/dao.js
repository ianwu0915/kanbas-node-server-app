import model from "./model.js";
import courseModel from "../Courses/model.js";

export const createUser = (user) => {
  return model.create(user);
};

export const findAllUsers = () => model.find();
export const findUserById = (userId) => model.findById(userId);
export const findUserByUsername = (username) =>
  model.findOne({ username: username });
export const findUsersByRole = (role) => model.find({ role: role }); // or just model.find({ role })
export const findUserByCredentials = (username, password) =>
  model.findOne({ username, password });

export const findUsersByPartialName = (partialName) => {
  const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
  return model.find({
    $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }],
  });
};

export const updateUser = (userId, user) =>
  model.updateOne({ _id: userId }, { $set: user });
export const deleteUser = (userId) => model.deleteOne({ _id: userId });

export const findCoursesByUser = async (userId) => {
  try {
    const user = await model.findById(userId);
    console.log("user_name:", user.username);
    if (!user) {
      throw new Error("User not found");
    }

    console.log(user.enrolledCourses);

    const courseIds = user.enrolledCourses.map((course) => course.courseId);
    console.log("course Ids are: ", courseIds);

    const courses = await courseModel.find({ _id: { $in: courseIds } });
    console.log(courses);
    return courses;
  } catch (error) {
    throw new Error("Error finding courses for user: " + error.message);
  }
};

export const studentRegisterCourse = async (userId, courseId) => {
  try {
    const user = await model.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    const course = await courseModel.findById(courseId);
    if (!course) {
      throw new Error("Course not found");
    }

    console.log("course name: ", course.name);
    console.log("courseID:", courseId)

    user.enrolledCourses.push({
      courseId: courseId,
      courseName: course.name,
      enrolledDate: new Date(),
    });

    await user.save();
    return user;
  } catch (error) {
    throw new Error("Error registering course for user: " + error.message);
  }
};

export const facultydeleteCourse = async (courseId) => {
  try {
    const users = await model.find({
      enrolledCourses: { $elemMatch: { courseId: courseId } },
    });
    console.log("users are: ", users);
    users.forEach(async (user) => {
      user.enrolledCourses = user.enrolledCourses.filter(
        (course) => course.courseId !== courseId
      );
      await user.save();
    });
  } catch (error) {
    throw new Error("Error deleting course from user: " + error.message);
  }
};

export const facultyEditCourse = async (courseId, course) => {
  try {
    const users = await model.find({
      enrolledCourses: { $elemMatch: { courseId: courseId } },
    });
    console.log("users are: ", users);
    users.forEach(async (user) => {
      user.enrolledCourses = user.enrolledCourses.map((c) =>
        c.courseId === courseId ? { ...c, courseName: course.name } : c
      );
      await user.save();
    });
  } catch (error) {
    throw new Error("Error updating course from user: " + error.message);
  }
};

//DAOs implement an interface between an application and the low level database access, providing a high level API to the rest of the application hiding the details and idiosyncrasies of using a particular database vendor.
// implements this encapsulation and abstraction principle by grouping data access by data type or collection. The following Users/dao.js implements various CRUD operations for the users collection written in terms of the low level Mongoose model operations.
// The DAOs are used by the routes to implement the business logic. The routes are the entry points to the application and the DAOs are the exit points to the database. The routes are responsible for parsing the request, calling the appropriate DAO function, and sending the response back to the client.
