import model from "./model.js";
export const createCourse = (course) => {
    return model.create(course);
}

export const findAllCourses = () => model.find();
export const findCourseById = (courseId) => model.findById(courseId);
export const findCourseByName = (name) =>  model.findOne({ name: name });

export const updateCourse = (courseId, course) =>  model.updateOne({ _id: courseId }, { $set: course });

export const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });