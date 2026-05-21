const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const form = document.getElementById("weather-form");
const apiKeyInput = document.getElementById("api-key-input");
const cityInput = document.getElementById("city-input");
const countryInput = document.getElementById("country-input");
const statusMessage = document.getElementById("status-message");
const resultSection = document.getElementById("result-section");
const locationName = document.getElementById("location-name");
const conditionText = document.getElementById("condition-text");
const weatherIcon = document.getElementById("weather-icon");
const temperatureValue = document.getElementById("temperature-value");
const humidityValue = document.getElementById("humidity-value");
const windValue = document.getElementById("wind-value");

function setStatus(message, type = "info") {
  statusMessage.textContent = message;
  statusMessage.className = type === "error" ? "status-message error" : "status-message";
}

function showResult(data) {
  const weather = data.weather?.[0] || {};
  const iconCode = weather.icon || "01d";

  locationName.textContent = `${data.name}, ${data.sys?.country || ""}`;
  conditionText.textContent = `${weather.main || "Unknown"}`;
  weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  weatherIcon.alt = weather.description || "Weather icon";
  temperatureValue.textContent = `${Math.round(data.main.temp)}°C`;
  humidityValue.textContent = `${data.main.humidity}%`;
  windValue.textContent = `${Math.round(data.wind.speed)} m/s`;

  resultSection.classList.remove("hidden");
}

function clearResult() {
  resultSection.classList.add("hidden");
}

async function fetchWeather(city, country, apiKey) {
  if (!apiKey) {
    throw new Error("Please enter your OpenWeatherMap API key.");
  }

  const query = `${city.trim()},${country.trim()}`;
  const url = `${BASE_URL}?q=${encodeURIComponent(query)}&units=metric&appid=${apiKey}`;
  const response = await fetch(url);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const message = errorData.message || "Unable to retrieve weather data.";
    throw new Error(message);
  }

  return response.json();
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const apiKey = apiKeyInput.value.trim();
  const city = cityInput.value.trim();
  const country = countryInput.value.trim();

  if (!apiKey || !city || !country) {
    setStatus("Please enter your API key, city, and country code.", "error");
    clearResult();
    return;
  }

  setStatus("Looking up weather…");
  clearResult();

  try {
    const weatherData = await fetchWeather(city, country, apiKey);
    showResult(weatherData);
    setStatus("Current weather retrieved successfully.");
  } catch (error) {
    setStatus(error.message, "error");
  }
});
