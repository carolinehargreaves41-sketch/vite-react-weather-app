import React from "react";
import ForecastDay from "./ForecastDay";
import "./ForecastList.css";

const ForecastList = ({ forecastData, isLoading, error, unit }) => {
  if (isLoading) {
    return (
      <div className="spinner-container" aria-live="polite" aria-busy="true">
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading forecast...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-secondary" role="alert">
        {error}
      </div>
    );
  }

  if (!forecastData) return null;

  if (!Array.isArray(forecastData.daily) || forecastData.daily.length === 0) {
    return (
      <p className="text-center text-muted">No forecast data available.</p>
    );
  }

  const forecastDays = forecastData.daily.slice(0, 5);

  return (
    <section
      className="forecast-list-section"
      aria-labelledby="forecast-heading"
    >
      <h2
        id="forecast-heading"
        className="forecast-list-title text-center mb-3"
      >
        5-Day Forecast
      </h2>

      <ul className="forecast-list-ul" role="list">
        {forecastDays.map((day) => (
          <li key={day.time} className="forecast-list-item" role="listitem">
            <ForecastDay day={day} unit={unit} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ForecastList;
