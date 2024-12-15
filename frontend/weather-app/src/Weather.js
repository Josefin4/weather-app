import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
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

    return (
        <div>
            <h1>Weather App</h1>
            <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={fetchWeather}>Get Weather</button>
            {weather && (
                <div>
                    <h2>Weather in {weather.name}</h2>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Weather: {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
