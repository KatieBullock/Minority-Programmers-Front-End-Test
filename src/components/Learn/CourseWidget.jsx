import { Link } from "react-router-dom";

const CourseWidget = ({ courseId, course }) => {
  let completedModules = 0;
  Object.values(course.modules).map((module) => {
    if (module.status === "complete") {
      completedModules += 1;
    }
    return completedModules;
  });

  return (
    <div>
      <h2>{course.title}</h2>
      <h3>{course.tag}</h3>
      <Link to={`/learn/${courseId}`}>
        <button>Learn</button>
      </Link>
      <div>
        {completedModules}/{Object.keys(course.modules).length}
      </div>
      <div>
        {(completedModules / Object.keys(course.modules).length) * 100}%
        Completed
      </div>
    </div>
  );
};

export default CourseWidget;
