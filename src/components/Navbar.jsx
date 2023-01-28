import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/Photos">Galería de fotografías</NavLink>
      <NavLink to="/Likes">Favoritas</NavLink>
    </nav>
  );
};

export default Navbar;
