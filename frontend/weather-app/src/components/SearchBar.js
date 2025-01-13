import React, { useState } from "react";
import useFetchWeather from "./useFetchWeather";

const SearchBar = ({ fetchWeather }) => {
    const [city, setCity] = useState(""); 
  
    const handleFetchWeather = () => {
      if (city) {
        fetchWeather(city);
      }
    };
  
    return (
      <div>
        <input
          className="input input-bordered w-full max-w-xs mr-6"
          type="text"
          placeholder="Enter city here"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleFetchWeather} className="btn btn-outline">
          Get Weather
        </button>
      </div>
    );
  };
  
  export default SearchBar;
  