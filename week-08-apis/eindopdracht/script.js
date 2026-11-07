// API_KEY wordt geladen vanuit config.js (zie config.example.js voor instructies)

const showWeather = (data) => {
let weather_info = document.querySelector("#weather-info");
console.log(data);
weather_info.innerHTML = ` <h2>${data.name}</h2>
<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
<p>Temperatuur: ${Math.round(data.main.temp)} °C</p> <p>Gevoelstemperatuur: ${Math.round(data.main.feels_like)} °C</p>
<p>Luchtvochtigheid: ${data.main.humidity}%</p>
<p>Windsnelheid: ${data.wind.speed} m/s</p> `;
};


const getWeather = (city) => {

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
  .then(response => response.json())
  .then(data => {
   console.log(data);
   showWeather(data);
        });

};

let search_form = document.querySelector("#search-form");
let city_input = document.querySelector("#city-input");

search_form.addEventListener("submit", (e) => {
    e.preventDefault();
    let city = city_input.value;
    getWeather(city);
    city_input.value = "";
});
