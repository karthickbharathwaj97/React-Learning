import React from "react";
import { IMG_CDN_URL } from "../../constants";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  area,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
      <div>
        <div>{name}</div>
        <div>
          <b>Cuisines</b> {cuisines.join(",")}
        </div>
        <div>
          <b>Area</b> {area}
        </div>
        <div>
          {" "}
          <b>Distance</b> {lastMileTravelString}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
