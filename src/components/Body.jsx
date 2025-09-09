import ResCards from "./ResCards";
import { useEffect, useState } from "react";
import ItrShimmer from "./Shimmer";

const Body = () => {
  const [restaurantListval, setrestaurantList] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.97210&lng=72.82460&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      console.log("API Response:", json);

      // Log each cards entry to find where restaurants are located
      if (json?.data?.cards) {
        json.data.cards.forEach((card, index) => {
          if (card?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
            console.log(`Found restaurants at cards[${index}]`);
          }
        });
      }

      // Try to find restaurants data dynamically
      const restaurantsData = json?.data?.cards.find(
        (card) =>
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setrestaurantList(restaurantsData || []);
      setLoading(false);
    } catch (e) {
      console.error("Error fetching data:", e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // conditional rendering
  if (loading) {
    return <ItrShimmer />;
  }

  // Return main content only after loading is complete
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
