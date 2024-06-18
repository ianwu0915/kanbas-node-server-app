import * as dao from "./dao.js";
export default function CourseRoutes(app) {
  const createCourse = async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  };

  const findAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  };

  const findCourseById = async (req, res) => {
    const course = await dao.findCourseById(req.params.courseId);
    res.json(course);
  };

  const findCourseByName = async (req, res) => {
    const course = await dao.findCourseByName(req.params.name);
    res.json(course);
  };

  const updateCourse = async (req, res) => {
    console.log("updateCourse");
    console.log("new course is:", req.body)
    const courseId  = req.body._id
    console.log("id is:", courseId);
    const status = await dao.updateCourse(courseId, req.body);
    console.log("status is:", status);
    res.json(status);
  };

  const deleteCourse = async (req, res) => {
    const course = await dao.deleteCourse(req.params.courseId);
    res.json(200);
  };

  app.get("/api/courses", findAllCourses);
  app.post("/api/courses", createCourse);
  app.get("/api/courses/:courseId", findCourseById);
  app.get("/api/courses/:name", findCourseByName);
  app.put("/api/courses/:courseId", updateCourse);
  app.delete("/api/courses/:courseId", deleteCourse);

}

