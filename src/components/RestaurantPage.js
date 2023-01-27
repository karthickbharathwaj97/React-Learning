import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../../constants";
import ShimmerUI from "./ShimmerUI";
const RestaurantPage = () => {
  const params = useParams();
  const [restaurantData, setRestaurantData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=11.2193848&lng=78.16784179999999&menuId=${params.id}`
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurantData(json.data);
  }
  console.log(params);
  if (!restaurantData) {
    return <ShimmerUI />;
  }
  return (
    <div>
      Restaurant {params.id}
      <h2>{restaurantData?.name}</h2>
      <img
        src={`${IMG_CDN_URL}${restaurantData?.cloudinaryImageId}`}
        alt="hotel pic"
      />
      <h3>Area: {restaurantData?.area}</h3>
      <h3>City: {restaurantData?.city}</h3>
      <h3>Rating: {restaurantData?.avgRating}</h3>
      <h4>Const For Two: {restaurantData?.costForTwoMsg}</h4>
      <ul>
        {Object.values(restaurantData?.menu?.items).map((item) => (
          <li key={item?.id}>{item?.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantPage;
