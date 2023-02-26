import { useGlobalContext } from "../context";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme, toggleTheme } = useGlobalContext();

  return (
    <nav>
      <div className="nav-center">
        <Link to="/">
          <h1>
            The
            <span>Movie</span>
            DB
          </h1>
        </Link>
        <button onClick={toggleTheme}>
          {theme === "dark-mode" ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
