import { useGlobalContext } from "../context";
import Card from "./Card";

const List = () => {
  const { movies } = useGlobalContext();
  console.log(movies);

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
              img={Poster}
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
