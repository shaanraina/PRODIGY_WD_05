document.getElementById('fetch-weather').addEventListener('click', fetchWeather);

async function fetchWeather() {
    const location = document.getElementById('location-input').value;
    const apiKey = 'a36c1ef4ae047a8b5226c962b2eddfe3';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Location not found');
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    document.getElementById('location-name').textContent = data.name;
    document.getElementById('weather-description').textContent = `Description: ${data.weather[0].description}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('feels-like').textContent = `Feels Like: ${data.main.feels_like}°C`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
    document.getElementById('pressure').textContent = `Pressure: ${data.main.pressure} hPa`;

    document.querySelector('.weather-info').style.display = 'block';
}