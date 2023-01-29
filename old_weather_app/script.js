function updateWeather(weatherData) {
    document.getElementById('city-name').innerText = weatherData.name
    document.getElementById('weather-type').innerText = weatherData.weather[0].main
    document.getElementById('temp').innerText = weatherData.main.temp
    document.getElementById('min-temp').innerText = weatherData.main.temp_min
    document.getElementById('max-temp').innerText = weatherData.main.temp_max
}

async function getCityWeather(city) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b5c4ddf039mshb79a15358e2c94ep1c7b8ejsnb4f6e8d63c3f',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };
    
    let response = await fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
    response = await response.json()

    if (response.message) {
        console.log(response.message);
    } else {
        updateWeather(response);
    }
    
}

function searchCity() {
    const cityInput = document.getElementById('city-input').value

    console.log('this should run before getting data');
    getCityWeather(cityInput)
    console.log('this should run before getting data due to async');
}