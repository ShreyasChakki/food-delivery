import ResCards from "./ResCards";
import { useEffect, useState } from "react";
import ItrShimmer from "./Shimmer";

const Body = () => {
  const [restaurantListval, setrestaurantList] = useState(null); // null means loading
  const [copyrestaurantListval,setcopyrestaurantListval] = useState([]);
  const [inputVal, setInput] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();

      // Find restaurants data dynamically and set state in one step
      const restaurantsData = json?.data?.cards.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      console.log(restaurantsData)

      setrestaurantList(restaurantsData);
      setcopyrestaurantListval(restaurantsData);
    } catch (e) {
      console.error("Error fetching data:", e);
      setrestaurantList([]); // Empty array on error
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Show shimmer while restaurantListval is null (still loading)
  if (restaurantListval === null) {
    return <ItrShimmer />;
  }

  return (
    <div className="body-container">
      <div className="filter-btn-container">
        <div className="search">
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={inputVal}
          />
          <button
          onClick={()=>{
            const searchedArray = restaurantListval.filter((val)=>val.info.name.toLowerCase().includes(inputVal.toLowerCase()));
            setcopyrestaurantListval(searchedArray);
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredrestaurantList = restaurantListval.filter(
              (ele) => ele.info.avgRating > 4
            );
            setcopyrestaurantListval(filteredrestaurantList);
          }}
        >
          Top rated restaurant
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            // Reset to original list
            setcopyrestaurantListval(restaurantListval);
          }}
        >
          Show All
        </button>
      </div>

      <div className="res-container">
        {copyrestaurantListval.length > 0 ? (
          copyrestaurantListval.map((item) => (
            <ResCards key={item.info.id} info={item.info} />
          ))
        ) : (
          <p>No restaurants found!</p>
        )}
      </div>
    </div>
  );
};

export default Body;