import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div id="nav">
      <Link to="/" style={{ textDecoration: "none", color: "#141471" }}>
        Home
      </Link>
      <Link to="/startup" style={{ textDecoration: "none", color: "#141471" }}>
        Incubator
      </Link>
      <Link to="/learn" style={{ textDecoration: "none", color: "#141471" }}>
        Learn
      </Link>
    </div>
  );
};

export default Nav;
