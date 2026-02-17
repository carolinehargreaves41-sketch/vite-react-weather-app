import React from "react";
import "./TemperatureConverter.css";

const TemperatureConverter = ({ currentUnit, onUnitChange }) => {
  return (
    <div className="temperature-converter">
      <span
        className={`unit ${currentUnit === "celsius" ? "active" : ""}`}
        onClick={() => onUnitChange("celsius")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onUnitChange("celsius");
          }
        }}
        aria-label="Switch to Celsius"
      >
        °C
      </span>

      <span className="separator">|</span>

      <span
        className={`unit ${currentUnit === "fahrenheit" ? "active" : ""}`}
        onClick={() => onUnitChange("fahrenheit")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onUnitChange("fahrenheit");
          }
        }}
        aria-label="Switch to Fahrenheit"
      >
        °F
      </span>
    </div>
  );
};

export default TemperatureConverter;
