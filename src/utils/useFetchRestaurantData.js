import { useState, useEffect } from "react";
import { RESTAURANT_MENU_URL } from "../../constants";

const useFetchRestaurantData = (resId) => {
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    getRestaurantInfo(resId);
  }, []);
  async function getRestaurantInfo(id) {
    const data = await fetch(`${RESTAURANT_MENU_URL}${id}`);
    const json = await data.json();
    console.log("some data", json.data);
    setRestaurantData(json.data);
  }
  return restaurantData;
};
export default useFetchRestaurantData;
