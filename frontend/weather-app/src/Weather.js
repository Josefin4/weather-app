import React, { useState } from "react";
import axios from "axios";
import { Button } from "@headlessui/react";
import { Input } from '@headlessui/react'

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
        <div className="card bg-base-100 w-2/4 shadow-xl">
            <div className="card-body">
            <h1 className="card-title">Welcome!</h1>
            <Input
                className="input input-bordered w-full max-w-xs"
                type="text"
                placeholder="Enter city here"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <div className="card-actions">
            <Button onClick={fetchWeather} className="btn btn-outline">Get Weather</Button></div>
            {weather && (
                <div>
                    <h2>Weather in {weather.name}</h2>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Weather: {weather.weather[0].description}</p>
                </div>
            )}
        </div>
        </div>
    );
};

export default Weather;
