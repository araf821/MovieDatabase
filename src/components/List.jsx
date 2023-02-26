import { useGlobalContext } from "../context";
import Card from "./Card";
import Loader from "./Loader";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const List = () => {
  const { movies, loading } = useGlobalContext();

  if (loading) {
    return <Loader />;
  }

  if (!movies) {
    return (
      <h1 className="page-center">No items matched the search criteria.</h1>
    );
  }

  return (
    <section className="list-container">
      <div className="cards">
        {movies.map((movie) => {
          console.log(movie);
          const { imdbID, Title, Poster, Type, Year } = movie;
          return (
            <Card
              key={imdbID}
              id={imdbID}
              name={Title}
              img={Poster === "N/A" ? url : Poster}
              type={Type}
              year={Year}
            />
          );
        })}
      </div>
    </section>
  );
};
export default List;
