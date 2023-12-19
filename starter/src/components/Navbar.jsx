import { Link, NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navbar";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">
          <NavLink to="/" className="">
            <img
              src="/assets/logo.svg"
              alt="House Plant"
              style={{ width: "40%" }}
            />
          </NavLink>
        </span>
        <div className="nav-links">
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            Newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
