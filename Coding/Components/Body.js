import RestaurantCard from "./RestaurantCard";
import { useState } from "react"; 
import Shimmer from "./Shimmer"; 
import { swiggy_api_URL } from "../constants";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/Helper"; 
import useResData from "../Hooks/useResData"; 

import searchImg from "../Images/search-12-32.png";
import OfferCarousel from "./OfferCarousel";
 
const Body = () => {
  
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [allRestaurants, FilterRes] = useResData(swiggy_api_URL);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);

  
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchText}"`
        );
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

   
  if (!allRestaurants) return null;

  return (
    <>
      <OfferCarousel/>
      <div className="search-container">
    
        <input
          type="text"
          className="search-input"
          placeholder="Search Restaurants"
          value={searchText}
          
          onChange={(e) => {
            setSearchText(e.target.value);
             
            searchData(e.target.value, allRestaurants);
          }}
        ></input>
        <div
          className="search-btn"
          onClick={() => {
            
            searchData(searchText, allRestaurants);
          }}
        >
        <img width="20px" src={searchImg}></img>
        </div>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

 
      {allRestaurants?.length === 0 && FilterRes?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          
          {(filteredRestaurants === null ? FilterRes : filteredRestaurants).map(
            (restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant?.info?.id}
                  key={restaurant?.info?.id}
                >
                  
                  <RestaurantCard {...restaurant?.info} />
                </Link>
              );
            }
          )}
        </div>
      )}
    </>
  );
};

export default Body;
