import { useGlobalContext } from "../context"

const Navbar = () => {
  return (
    <nav>
        <div className="nav-center">
            <h1>Movies</h1>
            <button>
                Toggle
            </button>
        </div>
    </nav>
  )
}
export default Navbar