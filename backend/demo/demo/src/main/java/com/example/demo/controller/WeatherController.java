package com.example.demo.controller;

import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.ResponseEntity;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/weather")
public class WeatherController {

    @Value("${weather.api.key}")
    private String apiKey;

    @Value("${weather.geo.url}")
    private String geoApiUrl;

    // Current Weather
    @GetMapping("/current")
    public ResponseEntity<String> getCurrentWeather(@RequestParam String city) {
        try {

            String geoUrl = String.format("%s?q=%s&limit=1&appid=%s", geoApiUrl, city, apiKey);
            RestTemplate restTemplate = new RestTemplate();
            String geoResponse = restTemplate.getForObject(geoUrl, String.class);

            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode geoArray = objectMapper.readTree(geoResponse);

            if (!geoArray.isArray() || geoArray.size() == 0) {
                return ResponseEntity.badRequest().body("City not found");
            }

            JsonNode geoData = geoArray.get(0);
            double lat = geoData.get("lat").asDouble();
            double lon = geoData.get("lon").asDouble();

            String currentWeatherUrl = String.format("https://api.openweathermap.org/data/2.5/weather?lat=%f&lon=%f&appid=%s&units=metric", lat, lon, apiKey);
            String currentWeatherResponse = restTemplate.getForObject(currentWeatherUrl, String.class);

            return ResponseEntity.ok(currentWeatherResponse);

        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error processing request: " + e.getMessage());
        }
    }

    // 3-Hourly Forecast
    @GetMapping("/forecast/3hour")
    public ResponseEntity<String> getThreeHourlyForecast(@RequestParam String city) {
        try {

            String geoUrl = String.format("%s?q=%s&limit=1&appid=%s", geoApiUrl, city, apiKey);
            RestTemplate restTemplate = new RestTemplate();
            String geoResponse = restTemplate.getForObject(geoUrl, String.class);

            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode geoArray = objectMapper.readTree(geoResponse);

            if (!geoArray.isArray() || geoArray.size() == 0) {
                return ResponseEntity.badRequest().body("City not found");
            }

            JsonNode geoData = geoArray.get(0);
            double lat = geoData.get("lat").asDouble();
            double lon = geoData.get("lon").asDouble();

            String forecastUrl = String.format("https://api.openweathermap.org/data/2.5/forecast?lat=%f&lon=%f&appid=%s&units=metric", lat, lon, apiKey);
            String forecastResponse = restTemplate.getForObject(forecastUrl, String.class);

            return ResponseEntity.ok(forecastResponse);

        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error processing request: " + e.getMessage());
        }
    }

    // Daily Forecast
    @GetMapping("/forecast/daily")
    public ResponseEntity<String> getDailyForecast(@RequestParam String city) {
        try {
            String geoUrl = String.format("%s?q=%s&limit=1&appid=%s", geoApiUrl, city, apiKey);
            RestTemplate restTemplate = new RestTemplate();
            String geoResponse = restTemplate.getForObject(geoUrl, String.class);

            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode geoArray = objectMapper.readTree(geoResponse);

            if (!geoArray.isArray() || geoArray.size() == 0) {
                return ResponseEntity.badRequest().body("City not found");
            }

            JsonNode geoData = geoArray.get(0);
            double lat = geoData.get("lat").asDouble();
            double lon = geoData.get("lon").asDouble();

            String forecastUrl = String.format("https://api.openweathermap.org/data/2.5/forecast?lat=%f&lon=%f&appid=%s&units=metric", lat, lon, apiKey);
            String forecastResponse = restTemplate.getForObject(forecastUrl, String.class);

            JsonNode forecastData = objectMapper.readTree(forecastResponse);
            JsonNode forecastList = forecastData.get("list");

            if (!forecastList.isArray()) {
                return ResponseEntity.badRequest().body("Invalid forecast data");
            }

            Map<String, JsonNode> dailyForecast = new LinkedHashMap<>();

            for (JsonNode entry : forecastList) {
                String timestamp = entry.get("dt_txt").asText(); // Example: "2025-02-12 12:00:00"
                String date = timestamp.split(" ")[0]; // Extract date only

                if (!dailyForecast.containsKey(date) && timestamp.contains("12:00:00")) {
                    dailyForecast.put(date, entry);
                }
            }

            ObjectNode result = objectMapper.createObjectNode();
            ArrayNode dailyArray = objectMapper.createArrayNode();

            for (JsonNode day : dailyForecast.values()) {
                ObjectNode dayData = objectMapper.createObjectNode();
                dayData.put("date", day.get("dt_txt").asText());
                dayData.put("temperature", day.get("main").get("temp").asDouble());
                dayData.put("weather", day.get("weather").get(0).get("description").asText());

                dailyArray.add(dayData);
            }

            result.set("daily_forecast", dailyArray);
            return ResponseEntity.ok(result.toPrettyString());

        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error processing request: " + e.getMessage());
        }
    }
}
