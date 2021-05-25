import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../Home/Home";
import Incubator from "../Incubator/Incubator";
import IncubatorDetails from "../Incubator/IncubatorDetails";
import Learn from "../Learn/Learn";
import Course from "../Learn/Course";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/startup">
          <Incubator />
        </Route>
        <Route path="/startup/:startupId">
          <IncubatorDetails />
        </Route>
        <Route exact path="/learn">
          <Learn />
        </Route>
        <Route path="learn/:courseId">
          <Course />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
