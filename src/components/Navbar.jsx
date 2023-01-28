import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/Photos">Photos</NavLink>
      <NavLink to="/Likes">Likes</NavLink>
    </nav>
  );
};

export default Navbar;
