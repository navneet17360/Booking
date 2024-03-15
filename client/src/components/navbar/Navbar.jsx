import React, { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
  };
  const { user, dispatch } = useContext(AuthContext);
  return (
    <div className="navbar gradient-bg">
      <div className="navContainer">
        <Link to="/home" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">
            <b>WillBook</b>
          </span>
        </Link>
        {user ? (
          <span>
            {user.username}{" "}
            <button onClick={handleLogout} className="navButton">
              Logout
            </button>
          </span>
        ) : (
          <div className="navItems">
            <Link to="/register">
              <button className="navButton">Register</button>
            </Link>
            <Link to="/">
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
