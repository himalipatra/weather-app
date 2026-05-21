# WEATHERLY

WEATHERLY is a minimalist static weather lookup app built with HTML, CSS, and vanilla JavaScript. It lets users find current weather conditions for any city and country and is designed to deploy directly to GitHub Pages.

## Files

- `index.html` — page structure and form
- `styles.css` — responsive minimalist styling
- `script.js` — fetches current weather from OpenWeatherMap and displays results

## Setup

1. Copy the repository to your local machine.
2. Open `script.js` and replace `YOUR_OPENWEATHERMAP_API_KEY` with your OpenWeatherMap API key.
3. Open `index.html` directly in your browser, or serve the folder with a simple static server.

## Adding the API key

In `script.js`, set:

```js
const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";
```

Replace the placeholder with your actual key. Because GitHub Pages is a static host, the API key cannot be hidden on the client side.

## Deployment to GitHub Pages

1. Push the repository to GitHub.
2. In your repository settings, enable GitHub Pages and choose the branch containing `index.html`.
3. Your site will be available at the URL shown in the Pages settings.

## Security note

Keep your API key out of the repository. For GitHub Pages, use a free-tier key with domain restrictions if possible, and do not commit private keys to source control.
