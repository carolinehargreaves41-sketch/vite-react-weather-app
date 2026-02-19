import React, { useState, useEffect } from "react";
import { Container, Alert } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import ForecastList from "./components/ForecastList";
import { getCurrentWeather, getForecast } from "./services/WeatherApi";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState("celsius");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [forecastData, setForecastData] = useState(null);
  const [forecastLoading, setForecastLoading] = useState(false);
  const [forecastError, setForecastError] = useState(null);

  useEffect(() => {
    handleSearch("Cancun");
  }, []);

  const handleSearch = async (city) => {
    setError(null);
    setForecastError(null);

    setLoading(true);
    setForecastLoading(true);

    const [currentResult, forecastResult] = await Promise.allSettled([
      getCurrentWeather(city, "metric"),
      getForecast(city, "metric"),
    ]);

    if (currentResult.status === "fulfilled") {
      setWeatherData(currentResult.value);
    } else {
      setError(currentResult.reason.message);
      setWeatherData(null);
    }
    setLoading(false);

    if (forecastResult.status === "fulfilled") {
      setForecastData(forecastResult.value);
    } else {
      setForecastError(forecastResult.reason.message);
      setForecastData(null);
    }
    setForecastLoading(false);
  };

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
  };

  return (
    <div className="App">
      <Container className="py-5">
        <header className="text-center mb-4">
          <h1 className="app-title">Weather App</h1>
          <p className="app-subtitle text-muted">
            Search for current weather in any city
          </p>
        </header>

        <SearchBar onSearch={handleSearch} />

        {error && (
          <Alert
            variant="secondary"
            className="alert-text"
            dismissible
            onClose={() => setError(null)}
          >
            {error}
          </Alert>
        )}

        {loading && (
          <div className="text-center my-4">
            <div className="spinner-grow text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {!loading && weatherData && (
          <WeatherDisplay
            weatherData={weatherData}
            unit={unit}
            onUnitChange={handleUnitChange}
          />
        )}

        <ForecastList
          forecastData={forecastData}
          isLoading={forecastLoading}
          error={forecastError}
          unit={unit}
        />
      </Container>

      <footer className="text-center mt-1 text-muted">
        <small>
          This project was coded by{" "}
          <a
            href="https://github.com/carolinehargreaves41-sketch"
            target="_blank"
          >
            Caroline Hargreaves
          </a>
          , is{" "}
          <a
            href="https://github.com/carolinehargreaves41-sketch/vite-react-weather-app"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
          , and{" "}
          <a
            href="https://stately-raindrop-ae08fb.netlify.app/"
            target="_blank"
          >
            hosted on Netlify.
          </a>
        </small>{" "}
        <br />
        <small>Weather data provided by SheCodes Weather API</small>
      </footer>
    </div>
  );
}

export default App;
