import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Enter a city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          aria-label="City search input"
          required
        />

        <Button
          variant="primary"
          className="custom-search-button"
          type="submit"
          aria-label="Search for weather"
        >
          Search
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
