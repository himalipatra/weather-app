# WEATHERLY

WEATHERLY is a minimalist static weather lookup app built with HTML, CSS, and vanilla JavaScript. It lets users find current weather conditions for any city and country and is designed to deploy directly to GitHub Pages.

## Files

- `index.html` — page structure and form
- `styles.css` — responsive minimalist styling
- `script.js` — fetches current weather from OpenWeatherMap and displays results

## Setup

1. Clone or download the repository.
2. Open `index.html` directly in your browser, or serve the folder with a simple static server.
3. When you open the app, you'll see a form to enter your OpenWeatherMap API key, city, and country code.

## Getting an API Key

1. Visit [openweathermap.org](https://openweathermap.org/api)
2. Sign up for a free account (if you don't have one)
3. Navigate to your API keys page
4. Copy your default API key
5. Paste it into the "OpenWeatherMap API Key" field in the WEATHERLY app

## How to Use

1. Paste your OpenWeatherMap API key into the first field
2. Enter the city name (e.g., "Sydney")
3. Enter the country code (e.g., "AU")
4. Click "Get Weather"
5. Current conditions, temperature, humidity, and wind speed will appear

## Deployment to GitHub Pages

1. Push the repository to GitHub.
2. In your repository settings, enable GitHub Pages and choose the branch containing `index.html`.
3. Your site will be available at the URL shown in the Pages settings.

## Security note

The API key is entered by the user in the browser and never stored—it is only used to fetch weather data from OpenWeatherMap. Your key is not sent to any third party or stored in the repository.
