# Weather App

A simple and intuitive web application that provides real-time weather information for any city in the world using the OpenWeatherMap API.

## Features

- 🌍 Search weather by city name
- 🌡️ Display current temperature in Celsius
- 💧 Show humidity levels
- 💨 Display wind speed
- 🎨 Clean and responsive user interface
- 📱 Mobile-friendly design

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

## Installation

1. **Clone or download the project**

   ```bash
   cd Weather
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## Usage

1. **Start the server**

   ```bash
   npm start
   ```

   The server will start on `http://localhost:8080`

2. **Open your browser**
   Navigate to `http://localhost:8080` in your web browser

3. **Search for weather**
   - Enter a city name in the search box
   - Click the "Get Weather" button
   - View the current weather information for that city

## Project Structure

```
Weather/
├── index.html      # Main HTML file with UI and client-side logic
├── style.css       # Styling for the web application
├── server.js       # Node.js server and API integration
├── package.json    # Project dependencies and metadata
└── README.md       # This file
```

## Technologies Used

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript (Vanilla)

- **Backend:**
  - Node.js
  - Express/HTTP module

- **API:**
  - OpenWeatherMap API

- **Dependencies:**
  - [axios](https://github.com/axios/axios) - HTTP client for API calls

## How It Works

1. User enters a city name in the web interface
2. The client sends a request to the local Node.js server
3. The server makes an API call to OpenWeatherMap API
4. Weather data is retrieved and returned to the client
5. The frontend displays the weather information including:
   - City name
   - Current temperature
   - Weather description
   - Humidity
   - Wind speed
   - Weather icon

## API Configuration

This application uses the OpenWeatherMap API. The API key is configured in `server.js`.

**Note:** For production use, consider:

- Moving the API key to environment variables
- Using a `.env` file to store sensitive information
- Regularly rotating API keys for security

## Troubleshooting

- **"Cannot find module axios"**: Run `npm install` to install dependencies
- **Port already in use**: Change the port in `server.js` if port 8080 is already in use
- **Invalid city error**: Ensure the city name is spelled correctly and exists

## License

This project is licensed under the ISC License - see the `package.json` file for details.

## Author

Created as a weather application project.
