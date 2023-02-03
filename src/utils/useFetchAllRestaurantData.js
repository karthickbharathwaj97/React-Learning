import { useEffect, useState } from "react";

const useFetchAllRestaurantData = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  useEffect(() => {
    getRestData();
  }, []);
  async function getRestData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2193848&lng=78.16784179999999&page_type=DESKTOP_WEB_LISTING"
    );
    console.log("this is data", data);
    const json = await data.json();

    console.log(json?.data?.cards[2]?.data?.data?.cards);
    setRestaurantData(json?.data?.cards[2]?.data?.data?.cards);
  }
  return restaurantData;
};
export default useFetchAllRestaurantData;
