const API_CONFIG = {
  baseURL: "https://api.shecodes.io/weather/v1",
  apiKey: import.meta.env.VITE_SHECODES_API_KEY,
};

/* Internal helper — performs a GET request with query params */
const apiGet = async (endpoint, params) => {
  const url = new URL(`${API_CONFIG.baseURL}/${endpoint}`);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  let response;
  try {
    response = await fetch(url.toString());
  } catch {
    throw new Error("Network error — please check your internet connection.");
  }

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error("Invalid API key. Please check your configuration.");
    }
    if (response.status === 404) {
      throw new Error(
        "City not found. Please check the spelling and try again.",
      );
    }
    throw new Error("Unable to fetch weather data. Please try again later.");
  }

  return response.json();
};

/* Fetches current weather data for a specified city */
export const getCurrentWeather = async (city, units = "metric") => {
  try {
    const data = await apiGet("current", {
      query: city,
      key: API_CONFIG.apiKey,
      units,
    });

    if (!data.city) {
      throw new Error(
        "City not found. Please check the spelling and try again.",
      );
    }

    return data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    throw error;
  }
};

/* Fetches 5-7 day forecast data for a specified city */
export const getForecast = async (city, units = "metric") => {
  try {
    const data = await apiGet("forecast", {
      query: city,
      key: API_CONFIG.apiKey,
      units,
    });

    if (!Array.isArray(data.daily)) {
      throw new Error("Forecast data unavailable for this city.");
    }

    return data;
  } catch (error) {
    console.error("Error fetching forecast:", error);
    throw error;
  }
};
