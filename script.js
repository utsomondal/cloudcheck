const apiKey = 'efb8905d1d554d20bbf4bab614527028';

function updateWeatherIcon(condition, iconId) {
    const icon = document.getElementById(iconId);
    const iconMapping = {
        'Clear': 'images/sunny.png',
        'Partly Cloudy': 'images/partly_cloudy.png',
        'Clouds': 'images/cloudy.png',
        'Rain': 'images/rainy.png',
        'Heavy Rain': 'images/heavy_rain.png',
        'Thunderstorm': 'images/stormy.png',
        'Drizzle': 'images/drizzle.png',
        'Snow': 'images/snowy.png',
        'Mist': 'images/mist.png',
        'Fog': 'images/fog.png',
        'Dust': 'images/dust.png',
        'Haze': 'images/haze.png',
        'default': 'images/default.png',
    };
    icon.src = iconMapping[condition] || iconMapping['default'];
}

function updateWeatherDetails({ iconId, tempId, descId, humidityId, windId, detailsId, data }) {
    updateWeatherIcon(data.weather[0].main, iconId);
    document.getElementById(tempId).textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById(descId).textContent = `Description: ${data.weather[0].description}`;
    document.getElementById(humidityId).textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById(windId).textContent = `Wind Speed: ${data.wind.speed} m/s`;
    document.getElementById(detailsId).style.display = 'block';
}

function fetchWeather(url, iconId, tempId, descId, humidityId, windId, detailsId, locationNameId, loaderId) {
    document.getElementById(loaderId).style.display = 'block';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            updateWeatherDetails({ iconId, tempId, descId, humidityId, windId, detailsId, data });
            if (locationNameId) {
                const locationName = data.name;
                document.getElementById(locationNameId).textContent = `Location: ${locationName}`;
            }
            document.getElementById(loaderId).style.display = 'none';
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById(loaderId).style.display = 'none';
            document.getElementById('errorMessage').style.display = 'block';
        });
}

function fetchCurrentLocationWeather() {
    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        fetchWeather(url, 'currentWeatherIcon', 'currentTemperature', 'currentDescription', 'currentHumidity', 'currentWind', 'currentWeatherDetails', 'currentLocationName', 'loadingCurrent');
    }, () => {
        document.getElementById('currentLocationName').textContent = 'Unable to retrieve location';
    });
}

document.getElementById('searchButton').addEventListener('click', () => {
    const cityName = document.getElementById('searchInput').value.trim();
    if (cityName === '') return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    document.getElementById('errorMessage').style.display = 'none';
    fetchWeather(url, 'searchedWeatherIcon', 'searchedTemperature', 'searchedDescription', 'searchedHumidity', 'searchedWind', 'searchedWeatherDetails', null, 'loadingSearched');
});

window.onload = fetchCurrentLocationWeather;
