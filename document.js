document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    if (!city) {
        alert('Please enter a city name');
        return;
    }

    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert('City not found');
            } else {
                document.getElementById('cityName').innerText = `City: ${data.name}`;
                document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
                document.getElementById('weatherDescription').innerText = `Description: ${data.weather[0].description}`;
                document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
                document.getElementById('windSpeed').innerText = `Wind Speed: ${data.wind.speed} m/s`;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to fetch weather data');
        });
});
