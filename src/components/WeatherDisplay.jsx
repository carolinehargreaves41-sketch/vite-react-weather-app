// src/components/WeatherDisplay.jsx
import React from "react";
import TemperatureConverter from "./TemperatureConverter";
import {
  capitalizeWords,
  formatDateTime,
  celsiusToFahrenheit,
  msToMph,
} from "../utils/helpers";
import "./WeatherDisplay.css";

const WeatherDisplay = ({ weatherData, unit, onUnitChange }) => {
  if (!weatherData) return null;

  const { city, condition, temperature, wind, time } = weatherData;

  const getDisplayTemperature = () => {
    const celsiusTemp = temperature.current;
    return unit === "fahrenheit"
      ? celsiusToFahrenheit(celsiusTemp)
      : Math.round(celsiusTemp);
  };

  const getDisplayWind = () => {
    if (unit === "fahrenheit") {
      return `${msToMph(wind.speed)} mph`;
    }
    return `${wind.speed.toFixed(1)} m/s`;
  };

  return (
    <div className="weather-display card shadow-sm">
      <div className="card-body">
        <div className="weather-header mb-3">
          <h2 className="city-name">
            {capitalizeWords(city)}
            {weatherData.country && (
              <span className="country-name">, {weatherData.country}</span>
            )}
          </h2>
          <p className="weather-time text-muted mb-1">{formatDateTime(time)}</p>
          <p className="weather-condition">
            {capitalizeWords(condition.description)}
          </p>
        </div>

        <div className="weather-main d-flex align-items-center justify-content-between">
          <div className="temperature-section d-flex align-items-center">
            <img
              src={condition.icon_url.replace("http://", "https://")}
              alt={condition.description}
              className="weather-icon"
              width={100}
              height={100}
            />
            <div className="temperature-display">
              <span className="temperature-value">
                {getDisplayTemperature()}
              </span>
              <TemperatureConverter
                currentUnit={unit}
                onUnitChange={onUnitChange}
              />
            </div>
          </div>

          <div className="weather-details">
            <div className="detail-item">
              <span className="detail-label">Humidity:</span>
              <span className="detail-value">{temperature.humidity}%</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Wind:</span>
              <span className="detail-value">{getDisplayWind()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
