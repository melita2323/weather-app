function addCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input");
  let change = document.querySelector("#city-name");
  change.innerHTML = `${city.value}`;
  let cityName = city.value;
  let apiKey = "6e5b6f936c666f6de792a3c5bae3ad5e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

function showTemp(response) {
  let temp = Math.round(response.data.main.temp);
  let humidity = response.data.main.humidity;
  let wind = Math.round(response.data.wind.speed);
  let descrip = response.data.weather[0].description;
  let humi = document.querySelector("#humidity");
  let temper = document.querySelector("#degree");
  let windy = document.querySelector("#wind");
  let description = document.querySelector("#description");
  let icony = document.querySelector("#icon");
  temper.innerHTML = `${temp}`;
  humi.innerHTML = `${humidity}`;
  windy.innerHTML = `${wind}`;
  description.innerHTML = `${descrip}`;
  icony.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function showPosition(position) {
  let namePosition = document.querySelector("#city-name").value;
  namePosition.innerHTML = `${position.data.main.name}`;
  let cityName = city.value;
  let apiKey = "6e5b6f936c666f6de792a3c5bae3ad5e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let mint = now.getMinutes();
if (mint < 10) {
  mint = `0${mint}`;
}
let time = document.querySelector("#time-city");
time.innerHTML = `${days[now.getDay()]}  ${hours}:${mint}`;

let cityform = document.querySelector("#city-form");
cityform.addEventListener("submit", addCity);

let button = document.querySelector("#current");
current.addEventListener("click", getCurrentPosition);

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#degree");

  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheiTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheiTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#degree");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);
