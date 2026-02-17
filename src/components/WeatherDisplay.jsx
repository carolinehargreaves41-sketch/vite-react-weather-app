import React from "react";
import { Card } from "react-bootstrap";
import TemperatureConverter from "./TemperatureConverter";
import {
  capitalizeWords,
  formatDateTime,
  celsiusToFahrenheit,
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

  return (
    <Card className="weather-display shadow-sm">
      <Card.Body>
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
              src={condition.icon_url}
              alt={condition.description}
              className="weather-icon"
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
              <span className="detail-value">{wind.speed.toFixed(1)} km/h</span>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default WeatherDisplay;
