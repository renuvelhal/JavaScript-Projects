<!DOCTYPE html>
<html>
<head>
  <title>Weather App</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 40px;
    }
    input, button {
      padding: 10px;
      font-size: 16px;
    }
    #weather {
      margin-top: 20px;
      font-size: 18px;
    }
  </style>
</head>
<body>

  <h2>🌤️ Live Weather App</h2>
  <input type="text" id="cityInput" placeholder="Enter city name" />
  <button onclick="getWeather()">Get Weather</button>

  <div id="weather"></div>

  <script>
    async function getWeather() {
      const city = document.getElementById("cityInput").value.trim();
      const apiKey = "YOUR_API_KEY_HERE";  // replace this with your real API key

      if (!city) {
        document.getElementById("weather").textContent = "Please enter a city name.";
        return;
      }

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("City not found");
        }
        const data = await response.json();

        const temp = data.main.temp;
        const desc = data.weather[0].description;

        document.getElementById("weather").textContent =
          `🌡️ ${city}: ${temp}°C, ${desc}`;
      } catch (error) {
        document.getElementById("weather").textContent =
          "❌ Error: " + error.message;
      }
    }
  </script>

</body>
</html>
