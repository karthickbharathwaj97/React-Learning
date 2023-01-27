import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { restaurantList } from "../../constants";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";

function Body() {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getRestData();
  }, []);
  async function getRestData() {
    setLoading(true);
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2193848&lng=78.16784179999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    if (json.statusCode === 0) {
      console.log(json?.data?.cards[2]?.data?.data?.cards);
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      console.log(allRestaurants, "allrest");
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      console.log(filteredRestaurants, "this is it");
      setLoading(false);
    } else if (json.statusCode === 1) {
      alert(json.statusMessage);
      setLoading(false);
    }
  }

  function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) => {
      return restaurant.data.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });

    return filterData;
  }
  return (
    <div className="restaurant-body">
      {loading ? (
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
            {filteredRestaurants.length === 0 ? (
              <>
                <h1>No restaurents found for ur saerch</h1>
              </>
            ) : (
              <>
                {filteredRestaurants.map((ele) => {
                  return (
                    <Link key={ele.data.id} to={`restaurant/${ele.data.id}`}>
                      <RestaurantCard {...ele.data} />;
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
