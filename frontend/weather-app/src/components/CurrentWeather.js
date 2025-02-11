import React, { useState } from "react";
import useFetchWeather from "./useFetchWeather";
import { Sun, Cloud, Wind, Droplets } from "lucide-react";

const CurrentWeather = ({ weather }) => {
  return (
    <div className="card bg-base-100 shadow-lg rounded-lg p-6">
      {weather ? (
        <>
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center">
              <h2 className="text-4xl font-bold">{weather.name}</h2>
            </div>
            <div className="text-center">
              <p className="text-4xl">{Math.round(weather.main.temp)}°C</p>
            </div>
            <div className="text-center">
              <p className="font-sans  text-4xl italic capitalize">
                {weather.weather[0].description}
              </p>
            </div>
          </div>
        </>
      ) : (
        <p>No weather data available.</p>
      )}
    </div>
  );
};

export default CurrentWeather;
