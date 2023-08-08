import { IMG_CDN_URL } from "../constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <div>
      <h3>{name}</h3>
      <h5>{areaName}</h5>
      <h6>{cuisines.join(", ")}</h6>
      </div>
      
      <span>
        <h4
          
        ><i className="fa-solid fa-star">&#9733;</i>{avgRatingString}
        </h4>
         
        <h4 className="info">{sla?.lastMileTravelString ?? '2.0 km'}</h4>
        
        <h4 className="info">{costForTwo ?? '₹200 for two'}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
