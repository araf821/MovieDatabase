import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import Loader from "../components/Loader";

const apiKey = import.meta.env.VITE_API_KEY;
const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=`;

const Movie = () => {
  const { loading, setLoading } = useGlobalContext();
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios(`${url}${id}`);
      console.log(response.data);
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

  return (
    <section className="movie-container">
      <div className="img-container">asdf</div>
      <div className="info-container">asdfd</div>
    </section>
  );
};
export default Movie;
