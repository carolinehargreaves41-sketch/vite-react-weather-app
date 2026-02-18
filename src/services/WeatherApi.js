import axios from "axios";

const API_CONFIG = {
  baseURL: "https://api.shecodes.io/weather/v1",
  apiKey: import.meta.env.VITE_SHECODES_API_KEY,
};

/*Fetches current weather data for a specified city or throws error*/
export const getCurrentWeather = async (city, units = "metric") => {
  try {
    const response = await axios.get(`${API_CONFIG.baseURL}/current`, {
      params: {
        query: city,
        key: API_CONFIG.apiKey,
        units: units,
      },
    });

    if (!response.data || !response.data.city) {
      throw new Error(
        "City not found. Please check the spelling and try again.",
      );
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching weather:", error);

    if (error.response) {
      if (error.response.status === 404) {
        throw new Error(
          "City not found. Please check the spelling and try again.",
        );
      }
      throw new Error(`Unable to fetch weather data. Please try again later.`);
    } else if (error.request) {
      throw new Error("Network error - please check your internet connection.");
    } else if (error.message.includes("City not found")) {
      throw error;
    } else {
      throw new Error("Failed to fetch weather data. Please try again.");
    }
  }
};

/*Fetches forecast weather data for a specified city or throws error*/
export const getForecast = async (city, units = "metric") => {
  try {
    const response = await axios.get(`${API_CONFIG.baseURL}/forecast`, {
      params: {
        query: city,
        key: API_CONFIG.apiKey,
        units: units,
      },
    });

    if (!response.data || !Array.isArray(response.data.daily)) {
      throw new Error("Forecast data unavailable for this city.");
    }

    return response.data;
  } catch (error) {
    if (!error.response && !error.request) throw error;

    console.error("Error fetching forecast:", error);

    if (error.response?.status === 404) {
      throw new Error(
        "City not found. Please check the spelling and try again.",
      );
    } else if (error.request) {
      throw new Error("Network error - please check your internet connection.");
    } else {
      throw new Error("Unable to fetch forecast data. Please try again later.");
    }
  }
};
