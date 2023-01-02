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
  let humidity=response.data.main.humidity;
  let wind=Math.round(response.data.wind.speed)
  let humi = document.querySelector("#humidity");
  let temper = document.querySelector("#degree");
  let windy=document.querySelector("#wind")
  temper.innerHTML = `${temp}`;
  humi.innerHTML=`${humidity}`
  windy.innerHTML=`${wind}`
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
let hours=now.getHours()
if (hours<10){hours=`0${hours}`}
let mint=now.getMinutes()
if (mint<10){mint=`0${mint}`}
let time = document.querySelector("#time-city");
time.innerHTML = `${days[now.getDay()]}  ${hours}:${mint}`;

let cityform = document.querySelector("#city-form");
cityform.addEventListener("submit", addCity);

let button = document.querySelector("#current");
current.addEventListener("click", getCurrentPosition);
