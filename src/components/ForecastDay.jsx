import React from "react";
import { Card } from "react-bootstrap";
import {
  getShortDayName,
  getShortDate,
  roundTemp,
  capitalizeWords,
  celsiusToFahrenheit,
  msToMph,
} from "../utils/helpers";
import "./ForecastDay.css";

const ForecastDay = ({ day, unit }) => {
  const { time, condition, temperature, wind } = day;

  /* Apply unit conversion to max/min temps.
     The API always returns metric, so we convert client-side if needed. */
  const maxTemp =
    unit === "fahrenheit"
      ? celsiusToFahrenheit(temperature.maximum)
      : roundTemp(temperature.maximum);

  const minTemp =
    unit === "fahrenheit"
      ? celsiusToFahrenheit(temperature.minimum)
      : roundTemp(temperature.minimum);

  return (
    <article
      className="forecast-day-card"
      aria-label={`Forecast for ${getShortDayName(time)} ${getShortDate(time)}`}
    >
      <Card className="h-100 text-center forecast-card shadow-sm">
        <Card.Body className="p-2">
          <p className="forecast-day-name mb-0">{getShortDayName(time)}</p>

          <p className="forecast-day-date text-muted mb-1">
            {getShortDate(time)}
          </p>

          <img
            src={condition.icon_url}
            alt={condition.description}
            className="forecast-icon"
            width={40}
            height={40}
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />

          <p className="forecast-condition mb-1">
            {capitalizeWords(condition.description)}
          </p>

          <div
            className="forecast-temps"
            aria-label={`High ${maxTemp}°, low ${minTemp}°`}
          >
            <span className="forecast-temp-max" title="Maximum temperature">
              {maxTemp}°
            </span>
            <span className="forecast-temp-divider" aria-hidden="true">
              {" "}
              /{" "}
            </span>
            <span className="forecast-temp-min" title="Minimum temperature">
              {minTemp}°
            </span>
          </div>

          <p className="forecast-detail mb-0">
            <span className="sr-only">Humidity: </span>
            💧 {temperature.humidity}%
          </p>

          <p className="forecast-detail mb-0">
            <span className="sr-only">Wind: </span>
            💨{" "}
            {unit === "fahrenheit"
              ? `${msToMph(wind.speed)} mph`
              : `${wind.speed.toFixed(1)} m/s`}
          </p>
        </Card.Body>
      </Card>
    </article>
  );
};

export default ForecastDay;
