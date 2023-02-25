import { useRef } from "react";

const Search = () => {
  const { searchValue } = useRef("");

  return (
    <section className="search-box">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="name"
          placeholder="One Piece"
          id="name"
          ref={searchValue}
          onChange=""
        />
      </form>
    </section>
  );
};
export default Search;
