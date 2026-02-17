/*Capitalizes the first letter of each word in a string*/
export const capitalizeWords = (str) => {
  if (!str) return "";

  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

/*Converts Celsius to Fahrenheit*/
export const celsiusToFahrenheit = (celsius) => {
  return Math.round((celsius * 9) / 5 + 32);
};

/*Converts Fahrenheit to Celsius*/
export const fahrenheitToCelsius = (fahrenheit) => {
  return Math.round(((fahrenheit - 32) * 5) / 9);
};

/*Formats a Unix timestamp to a readable date/time*/
export const formatDateTime = (timestamp) => {
  const date = new Date(timestamp * 1000);

  const options = {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
  };

  return date.toLocaleString("en-US", options).replace(",", "");
};
