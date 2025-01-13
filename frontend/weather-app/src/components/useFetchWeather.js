import { useState } from "react";
import axios from "axios";

const useFetchWeather = () => {
    const [weather, setWeather] = useState(null);

    const fetchWeather = async (city) => {
        try {
            const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/api/weather`;
            const response = await axios.get(apiUrl, { params: { city } });
            setWeather(response.data);
        } catch (error) {
            console.error("Error fetching weather data", error);
        }
    };

    return { weather, fetchWeather };
};

export default useFetchWeather;
