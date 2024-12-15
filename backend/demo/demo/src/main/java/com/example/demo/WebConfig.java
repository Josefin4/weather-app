package com.example.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

        @Override
        public void addCorsMappings(CorsRegistry registry) {
            registry.addMapping("/api/**")  // Apply to all /api endpoints
                    .allowedOrigins("https://amusing-imagination-production.up.railway.app/")
                    .allowedMethods("GET", "POST", "PUT", "DELETE")
                    .allowedHeaders("*")  // Allow all headers
                    .allowCredentials(true);  // Allow credentials, if needed
        }
    }
