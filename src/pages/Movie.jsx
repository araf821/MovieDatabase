import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import Loader from "../components/Loader";

const apiKey = import.meta.env.VITE_API_KEY;
const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=`;

const Movie = () => {
  const { loading, setLoading } = useGlobalContext();
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios(`${url}${id}`);
      const data = await response.data;
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (!movie) {
    return <h1 className="page-center">Nothing to see here! LEAVE</h1>;
  }

  const {
    Poster: image,
    Title: name,
    Released: releaseDate,
    Type: type,
    Genre: genre,
    Country: country,
    Language: language,
    Writer: author,
    Plot: plot,
  } = movie;

  plot.replace("&amp;", "and");

  return (
    <section className="movie-page">
      <h1>{name}</h1>
      <div className="movie-container">
        <div className="img-container">
          <img src={image} alt="" />
        </div>
        <div className="info-container">
          <p>
            <span>Release Date:</span>
            {releaseDate}
          </p>
          <p style={{ textTransform: "capitalize" }}>
            <span>Type:</span>
            {type}
          </p>
          <p>
            <span>Genre:</span>
            {genre}
          </p>
          <p>
            <span>Country:</span>
            {country}
          </p>
          <p>
            <span>Language:</span>
            {language}
          </p>
          <p>
            <span>Author:</span>
            {author}
          </p>
          <p>
            <span>Plot:</span>
            {decodeURI(plot)}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Movie;
