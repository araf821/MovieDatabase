import { Link } from "react-router-dom";

const Card = ({ id, name, img, type, year }) => {
  return (
    <Link to={`/movies/${id}`} className="card">
      <img src={img} alt={name} />
      {/* <div className="info-container">
        <h3>{name}</h3>
      </div> */}
    </Link>
  );
};
export default Card;
