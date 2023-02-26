import { useGlobalContext } from "../context";
import Card from "./Card";

const List = () => {
  const { movies } = useGlobalContext();
  console.log(movies)

  return (
    <section className="list-container">
      {movies.map((movie) => {
        console.log(movie)
        const {Title: name, Poster: img, Type: type, Year: year} = movie
        return <Card key={movie.imdbID} name={name} img={img} />;
      })}
    </section>
  );
};
export default List;
