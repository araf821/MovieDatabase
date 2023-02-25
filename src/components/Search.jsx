import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Search = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  return (
    <section>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="search-box">
          <input
            type="text"
            name="name"
            placeholder="One Piece"
            id="name"
            ref={searchValue}
            autoComplete="off"
            spellCheck="false"
          />
          <button onClick={() => setSearchTerm(searchValue.current.value)}>
            <FaSearch />
          </button>
        </div>
      </form>
    </section>
  );
};
export default Search;
