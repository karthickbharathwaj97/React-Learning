import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { restaurantList } from "../../constants";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { filterData } from "../utils/helper";
import useFetchAllRestaurantData from "../utils/useFetchAllRestaurantData";
import useOnline from "../utils/useOnline";

function Body() {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const online = useOnline();

  const restaurantData = useFetchAllRestaurantData();
  useEffect(() => {
    setAllRestaurants(restaurantData);
    setFilteredRestaurants(restaurantData);
    console.log(restaurantData);
  }, [restaurantData]);

  if (!online) {
    return (
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        🔴 You are not Online 🔴
      </div>
    );
  }
  return (
    <div className="restaurant-body">
      {allRestaurants?.length === 0 ? (
        <>
          <ShimmerUI />
        </>
      ) : (
        <>
          <div>
            <input
              value={searchText}
              type="text"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              onClick={() => {
                const data = filterData(searchText, allRestaurants);
                setFilteredRestaurants(data);
              }}
            >
              search
            </button>
            <div>{searchText}</div>
          </div>

          <div className="restaurant-list">
            {filteredRestaurants?.length === 0 ? (
              <>
                <h1>No restaurants found for ur search</h1>
              </>
            ) : (
              <>
                {filteredRestaurants?.map((ele) => {
                  return (
                    <Link key={ele.data.id} to={`restaurant/${ele.data.id}`}>
                      <RestaurantCard {...ele.data} />
                    </Link>
                  );
                })}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Body;
