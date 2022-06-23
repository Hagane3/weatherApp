const searchCity = document.getElementById('SearchCity');
const city = document.getElementById('City');
const temp = document.getElementById('Temp');
const humidity = document.getElementById('Humidity');
const windSpeed = document.getElementById('WindSpeed');
const latitude = document.getElementById('lat');
const longitude = document.getElementById('long');

const weatherWrapper = document.querySelector('.wrapper');
const errorText = document.querySelector('.errorMsg');

const API_KEY = '69c28e1dfc0ea413ec274b24beb9c45c';

const getWeather = (e) => {
    const currentCity = e.target.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${API_KEY}`)
    .then(response => response.json())
    .then( weatherInfo )
    .catch(err =>  {
        errorText.textContent= "Nie znaleziono miasta!";
        weatherWrapper.classList.remove('showItems');
        console.log(err);
    });

    
}

const weatherInfo = (weather) => {
    const {name, sys, main, wind, coord} = weather

    console.log(weather)
    
    city.innerHTML = `${name} <span>${sys.country}</span>`;
    temp.textContent = Math.floor(main.temp - 272.15) + '°C';
    humidity.textContent = main.humidity + '%';
    windSpeed.textContent = wind.speed + 'm/s';
    latitude.textContent = coord.lon;
    longitude.textContent = coord.lat;

    weatherWrapper.classList.add('showItems');
    errorText.textContent = "";

}



searchCity.addEventListener('change', (e) => getWeather(e) );