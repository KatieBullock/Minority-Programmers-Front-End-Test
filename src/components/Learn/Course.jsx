import { useParams } from "react-router-dom";
import data from "../../assets/data.json";

const Course = () => {
  const { courseId } = useParams();

  const course = data.courses[courseId];

  let completedModules = 0;

  Object.values(course.modules).map((module) => {
    if (module.status === "complete") {
      completedModules += 1;
    }
    return completedModules;
  });

  return (
    <div>
      <div>
        <button>Back to Courses</button>
        {Object.entries(course.modules).map(([module, details]) => {
          return (
            <div key={`${module}-${details.title}`}>
              <h4>{module}</h4>
              <h5>{details.title}</h5>
            </div>
          );
        })}
        <div>
          <header>
            <img src="https://via.placeholder.com/100" alt="user" />
            <div>
              <h2>Welcome back, User</h2>
              <p>
                {(completedModules / Object.keys(course.modules).length) * 100}%
                Completed
              </p>
              <button>Resume</button>
            </div>
          </header>
          <nav>
            <div>Modules</div>
            <div>Calendar</div>
            <div>Messages</div>
          </nav>
          <div>
            {Object.entries(course.modules).map(([module, details]) => {
              return (
                <div key={`${module}-${details.title}`}>
                  <h4>{module}</h4>
                  <h5>{details.title}</h5>
                  <p>{details.status}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
