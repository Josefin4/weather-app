import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import useFetchWeather from "./components/useFetchWeather";
import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";

const App = () => {
  const { weather, fetchWeather } = useFetchWeather();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-sky-300 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-primary mb-8">
          <SearchBar fetchWeather={fetchWeather} />
        </h1>
        <CurrentWeather weather={weather} />
      
      <div className="grid gap-6 md:grid-cols-2">
        <HourlyForecast />
        <DailyForecast />
      </div>
    </div></div>
  );
};

export default App;
