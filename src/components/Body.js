import { restaurantList } from "../../constants";
import RestaurantCard from "./RestaurantCard";

function Body() {
  return (
    <div className="restaurant-body">
      <div>
        <input type="text" />
        <button>search</button>
      </div>

      <div className="restaurant-list">
        {restaurantList.map((ele) => {
          console.log(ele.data);
          return <RestaurantCard {...ele.data} key={ele.data.id} />;
        })}
      </div>
    </div>
  );
}

export default Body;
