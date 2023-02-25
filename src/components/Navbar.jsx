import { useGlobalContext } from "../context";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { theme, toggleTheme } = useGlobalContext();

  return (
    <nav>
      <div className="nav-center">
        <h1>
          The
          <span>Movie</span>
          DB
        </h1>
        <button onClick={toggleTheme}>
          {theme === "dark-mode" ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
