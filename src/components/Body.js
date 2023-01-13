import { useState } from "react";
import { restaurantList } from "../../constants";
import RestaurantCard from "./RestaurantCard";

function Body() {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) => {
      return restaurant.data.name.includes(searchText);
    });

    return filterData;
  }
  return (
    <div className="restaurant-body">
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
            const data = filterData(searchText, restaurantList);
            setRestaurants(data);
          }}
        >
          search
        </button>
        <div>{searchText}</div>
      </div>

      <div className="restaurant-list">
        {restaurants.map((ele) => {
          return <RestaurantCard {...ele.data} key={ele.data.id} />;
        })}
      </div>
    </div>
  );
}

export default Body;
