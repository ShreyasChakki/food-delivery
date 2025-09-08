import ResCards from "./ResCards";
import restaurantList from "../../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  let [restaurantListval, setrestaurantList] = useState(restaurantList);

  useEffect(()=>{
    fetchData(); // function call
  },[])

const fetchData = async ()=>{
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await response.json();
    console.log(json.data);
    setrestaurantList(json.data.cards[4].card.card.gridElements.infoWithStyle
.restaurants);
}

  return (
    <div className="body-container">
      <div className="filter-btn-container">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredrestaurantList = restaurantListval.filter(
              (ele) => ele.info.avgRating > 4
            );
            setrestaurantList(filteredrestaurantList);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {restaurantListval.map((item) => (
          <ResCards key={item.info.id} info={item.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
