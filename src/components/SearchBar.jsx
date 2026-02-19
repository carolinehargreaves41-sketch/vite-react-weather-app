import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form mb-4">
      {/* Label is visually hidden but present for screen readers */}
      <label htmlFor="city-search" className="visually-hidden">
        Search for a city
      </label>

      <div className="search-input-group">
        <input
          id="city-search"
          type="text"
          placeholder="Enter a city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          aria-label="City search input"
          className="search-input"
          required
        />

        <button
          type="submit"
          className="search-button"
          aria-label="Search for weather"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
