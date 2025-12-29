import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle = ({ isActive }) => ({
    marginRight: "12px",
    textDecoration: "none",
    color: isActive ? "white" : "black",
    background: isActive ? "#007bff" : "transparent",
    padding: "6px 10px",
    borderRadius: "4px"
  });

  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>
      <NavLink to="/about" style={linkStyle}>
        About
      </NavLink>
      <NavLink to="/user/1" style={linkStyle}>
        User
      </NavLink>
    </nav>
  );
}

export default Navbar;
