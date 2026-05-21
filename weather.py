import os
import sys

import requests


def get_weather(api_key: str) -> dict:
    """Call the OpenWeatherMap API and return the JSON response."""
    url = "https://api.openweathermap.org/data/2.5/weather"
    params = {
        "q": "Melbourne,AU",
        "appid": api_key,
        "units": "metric",
    }

    response = requests.get(url, params=params, timeout=10)
    response.raise_for_status()

    data = response.json()
    if not isinstance(data, dict):
        raise ValueError("Unexpected API response format")

    return data


def parse_weather(data: dict) -> tuple[float, str]:
    """Extract temperature and weather description from the API response."""
    main = data.get("main")
    weather_list = data.get("weather")

    if not main or "temp" not in main or not weather_list:
        raise KeyError("Missing expected weather fields in API response")

    temperature = main["temp"]
    condition = weather_list[0].get("description", "Unknown conditions").capitalize()
    return temperature, condition


def main() -> None:
    """Load the API key, retrieve weather data, and print a summary."""
    api_key = os.getenv("OPENWEATHER_API_KEY")
    if not api_key:
        print("Error: OPENWEATHER_API_KEY environment variable is not set.", file=sys.stderr)
        sys.exit(1)

    try:
        weather_data = get_weather(api_key)
        temperature, condition = parse_weather(weather_data)

    except requests.exceptions.RequestException as exc:
        print(f"Network error: {exc}", file=sys.stderr)
        sys.exit(1)
    except (ValueError, KeyError) as exc:
        print(f"API response error: {exc}", file=sys.stderr)
        sys.exit(1)

    print("Current weather for Melbourne, Australia:")
    print(f"  Temperature: {temperature:.1f} °C")
    print(f"  Conditions: {condition}")


if __name__ == "__main__":
    main()
