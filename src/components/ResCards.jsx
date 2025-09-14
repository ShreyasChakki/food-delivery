import { CDN_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const ResCards = ({ info }) => {
  // Destructure info directly
  const {
    id,
    name,
    avgRating,
    sla,
    cloudinaryImageId,
    cuisines,
    costForTwo,
  } = info;
  // const {deliveryTime} = sla;
    const deliveryTime = sla?.deliveryTime || sla?.slaString || "30-40";

  return (
    <Link to={`/restaurant/${id}`} className="card-link">
      <div className="res-card">
        <img
          className="res-logo"
          alt={name}
          src={`${CDN_URL}${cloudinaryImageId}`}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <div className="res-meta">
          <div className="rating">
            ★ {avgRating}
          </div>
          <div className="cost-time">
            <span>{costForTwo}</span>
            <span>{deliveryTime} mins</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ResCards;