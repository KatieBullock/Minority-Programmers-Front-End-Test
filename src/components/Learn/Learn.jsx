import data from "../../assets/data.json";
import CourseWidget from "./CourseWidget";

const Learn = () => {
  const courses = data.courses;
  return (
    <div>
      <div>
        <h3>My Courses</h3>
        {Object.entries(courses).map(([courseId, course]) => {
          return (
            <div key={`course-${courseId}`}>
              <CourseWidget courseId={courseId} course={course} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Learn;
