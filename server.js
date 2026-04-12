const http = require("http");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const API_KEY = "a95d567ec3fff09bc1951ed7be9d8eca";

// Fetch weather data
async function fetchWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const response = await axios.get(url);

  return {
    city: response.data.name,
    temperature: response.data.main.temp + " °C",
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity + "%",
    windSpeed: response.data.wind.speed + " m/s",
    icon: response.data.weather[0].icon,
  };
}

// Create server
const server = http.createServer(async (req, res) => {

  // Serve index.html
  if (req.url === "/" && req.method === "GET") {
    const filePath = path.join(__dirname, "index.html");

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error loading HTML file");
        return;
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
    return;
  }

  // Serve style.css
  if (req.url === "/style.css" && req.method === "GET") {
    const filePath = path.join(__dirname, "style.css");

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error loading CSS file");
        return;
      }

      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(data);
    });
    return;
  }

  // Weather route
  if (req.url.startsWith("/weather")) {

    const url = new URL(req.url, `http://${req.headers.host}`);
    const city = url.searchParams.get("location");

    if (!city) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "City is required" }));
      return;
    }

    try {
      const data = await fetchWeatherData(city);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));

    } catch (err) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "City not found" }));
    }

    return;
  }

  // Not found
  res.writeHead(404);
  res.end("Not Found");
});

// Dynamic Port (Fix for EADDRINUSE)
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});