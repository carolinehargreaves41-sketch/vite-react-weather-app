/* Capitalizes the first letter of each word in a string */
export const capitalizeWords = (str) => {
  if (!str) return "";

  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

/* Converts Celsius to Fahrenheit */
export const celsiusToFahrenheit = (celsius) => {
  return Math.round((celsius * 9) / 5 + 32);
};

/* Converts Fahrenheit to Celsius */
export const fahrenheitToCelsius = (fahrenheit) => {
  return Math.round(((fahrenheit - 32) * 5) / 9);
};

/* Formats a Unix timestamp to a readable date/time */
export const formatDateTime = (timestamp) => {
  const date = new Date(timestamp * 1000);

  const options = {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
  };

  return date.toLocaleString("en-US", options).replace(",", "");
};

/* Formats a short day name from a Unix timestamp */
export const getShortDayName = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleDateString("en-GB", {
    weekday: "short",
  });
};

/* Formats a short date string from a Unix timestamp */
export const getShortDate = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });
};

/* Rounds a float temperature to the nearest integer */
export const roundTemp = (temp) => Math.round(temp);

/* Converts metres per second to miles per hour, rounded to 1 decimal place.
   The API returns m/s when fetching metric units. When the user switches to
   Fahrenheit (imperial display) wind speed is converted to mph to match. */
export const msToMph = (ms) => {
  return (ms * 2.237).toFixed(1);
};