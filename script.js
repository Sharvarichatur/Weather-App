async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '5bb2b486160f5398fbd4d96de0f19ceb'; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById('weatherResult').innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>${data.weather[0].main}</strong> - ${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
    } else {
      document.getElementById('weatherResult').innerHTML = `<p>City not found.</p>`;
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    document.getElementById('weatherResult').innerHTML = `<p>Error fetching data.</p>`;
  }
}
