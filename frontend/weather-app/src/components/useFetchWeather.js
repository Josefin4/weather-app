import { useState } from "react";
import axios from "axios";

const useFetchWeather = () => {
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [dailyForecast, setDailyForecast] = useState(null);

    const fetchWeather = async (city) => {
        try {
            // Fetch current weather
            const apiUrl = `http://localhost:8080/api/weather/current?city=${city}`;
            const response = await axios.get(apiUrl);
            setWeather(response.data);

            // Fetch 3-hour forecast
            const forecastApiUrl = `http://localhost:8080/api/weather/forecast/3hour?city=${city}`;
            const forecastResponse = await axios.get(forecastApiUrl);
            setForecast(forecastResponse.data);

            // Fetch daily forecast
            const dailyApiUrl = `http://localhost:8080/api/weather/forecast/daily?city=${city}`;
            const dailyResponse = await axios.get(dailyApiUrl);
            setDailyForecast(dailyResponse.data);
        } catch (error) {
            console.error("Error fetching weather data", error);
        }
    };

    return { weather, forecast, dailyForecast, fetchWeather };
};

export default useFetchWeather;
