import { Link } from "react-router-dom";

const Card = ({ id, name, img, type, year }) => {
  return (
    <div className="card-container">
      <Link to={`/movies/${id}`} className="card">
        <img src={img} alt={name} />
      </Link>
      <div className="info-container">
        <h4>{name}</h4>
        <p>
          <strong>{type}</strong>
        </p>
        <p>{year}</p>
      </div>
    </div>
  );
};
export default Card;
