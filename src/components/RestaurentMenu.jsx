import React, { useEffect, useState } from "react";
import ItrShimmer from "./Shimmer";
import { useParams } from "react-router-dom";

function RestaurentMenu() {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [menuItems, setMenuItems] = useState(null);
  const { resid } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=${resid}`
      );
      const json = await data.json();

      const restaurantData =
        json?.data?.cards?.find((card) => card?.card?.card?.info)?.card?.card
          ?.info;

      setRestaurantInfo(restaurantData);

      const menuItemsData =
        json?.data?.cards
          ?.find((card) => card?.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards
          ?.find((card) => card?.card?.card?.itemCards)?.card?.card?.itemCards ||
        [];

      setMenuItems(menuItemsData);

      console.log("Restaurant Info:", restaurantData);
      console.log("Menu Items:", menuItemsData);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  // Format description to separate nutritional info and allergens
  const formatDescription = (description) => {
    if (!description) return { main: "", nutrition: "", allergens: "" };

    // Split the description if it contains nutritional info
    const mainPart = description.split("(")[0].trim();

    // Extract nutritional info (text in parentheses)
    const nutritionMatch = description.match(/\((.*?)\)/);
    const nutritionInfo = nutritionMatch ? nutritionMatch[1] : "";

    // Extract allergen info (text after "Contains")
    const allergensMatch = description.match(/Contains (.*?)\.$/);
    const allergens = allergensMatch ? allergensMatch[1] : "";

    return {
      main: mainPart,
      nutrition: nutritionInfo,
      allergens: allergens,
    };
  };

  // Show shimmer while data is loading
  if (restaurantInfo === null || menuItems === null) {
    return <ItrShimmer />;
  }

  return (
    <div className="restaurant-menu">
      <div className="restaurant-header">
        <h1>{restaurantInfo?.name || "Restaurant Menu"}</h1>
        <p>{restaurantInfo?.cuisines?.join(", ")}</p>
        <p>
          {restaurantInfo?.areaName}, {restaurantInfo?.city}
        </p>
        <div className="restaurant-details">
          <p>⭐ {restaurantInfo?.avgRating}</p>
          <p>🕒 {restaurantInfo?.sla?.deliveryTime} mins</p>
          <p>💰 {restaurantInfo?.costForTwoMessage}</p>
        </div>
      </div>

      <div className="menu-items">
        <h2>Menu Items ({menuItems.length})</h2>
        <ul className="item-list">
          {menuItems.map((item) => {
            const { main, nutrition, allergens } = formatDescription(
              item.card.info.description
            );
            return (
              <li key={item.card.info.id} className="menu-item">
                <div className="item-details">
                  <h3>{item.card.info.name}</h3>
                  <p className="item-price">
                    ₹
                    {item.card.info.price / 100 ||
                      item.card.info.defaultPrice / 100}
                  </p>
                  <p className="item-description">{main}</p>

                  {(nutrition || allergens) && (
                    <div className="nutrition-info">
                      {nutrition && (
                        <div className="section">
                          <strong>Nutritional Info:</strong> {nutrition}
                        </div>
                      )}
                      {allergens && (
                        <div className="allergens">
                          <strong>Contains:</strong> {allergens}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                {item.card.info.imageId && (
                  <div className="item-image">
                    <img
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info.imageId}`}
                      alt={item.card.info.name}
                    />
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default RestaurentMenu;
