import React, { useState, useEffect } from "react";
import { Container, Alert } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import { getCurrentWeather } from "./services/weatherApi";
import "./App.css";

function App() {
  /*STATE MANAGEMENT*/

  const [weatherData, setWeatherData] = useState(null);

  const [unit, setUnit] = useState("celsius");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  /*SIDE EFFECTS*/

  useEffect(() => {
    handleSearch("Cancun");
  }, []);

  /*EVENT HANDLERS*/

  const handleSearch = async (city) => {
    setError(null);

    setLoading(true);

    try {
      const data = await getCurrentWeather(city, "metric");

      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
  };

  /*RENDER*/

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
