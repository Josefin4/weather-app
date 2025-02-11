// import React, { useState } from "react";
// import axios from "axios";
// import { Button } from "@headlessui/react";
// import { Input } from "@headlessui/react";

/* const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/api/weather`;
      const response = await axios.get(apiUrl, {
        params: { city },
      });
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  const formattedDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
});

  const formattedTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
}); */
 {/* 
  return (
    <div className="card bg-base-100 w-2/4  shadow-xl rounded-sm bg-opacity-60">
      <div className="card-body flex flex-col">
       
        <div className="flex items-center space-x-2">
          <Input
            className="input input-bordered w-full max-w-xs"
            type="text"
            placeholder="Enter city here"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Button onClick={fetchWeather} className="btn btn-outline">
            Get Weather
          </Button>
        </div>
        <div className="flex flex-col justify-between items-start mt-6">
        {weather && (
          <div className="flex flex-col gap-14">
            <h2 className="font-mono font-medium text-3xl uppercase mb-2">Weather in {weather.name}</h2>
            <p className="font-sans font-light text-l">{formattedDate}, {formattedTime}</p>
            <p className="font-sans font-bold text-6xl mt-6">{weather.main.temp}°C</p>
            <p className="font-sans font-semibold text-xl italic capitalize mt-4">{weather.weather[0].description}</p>
            
          </div>
        )}</div>
      </div>
    </div>
  );
};


export default Weather;*/}