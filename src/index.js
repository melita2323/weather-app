function date(time) {
  let date = new Date(time);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let mint = date.getMinutes();
  if (mint < 10) {
    mint = `0${mint}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day}  ${hours}:${mint}`;
}
function displayTemp(response) {
  let humi = document.querySelector("#humidity");
  let temper = document.querySelector("#degree");
  let windy = document.querySelector("#wind");
  let description = document.querySelector("#description");
  let city = document.querySelector("#city-name");
  let icony = document.querySelector("#icon");
  let timee = document.querySelector("#time-city");
  console.log(response);
  let temp = Math.round(response.data.temperature.current);
  let humidity = response.data.temperature.humidity;
  let wind = Math.round(response.data.wind.speed);
  let descrip = response.data.condition.description;
  let cityN = response.data.city;
  let icon = response.data.condition.icon;
  timee.innerHTML = date(response.data.time * 1000);
  temper.innerHTML = `${temp}`;
  humi.innerHTML = `${humidity}`;
  windy.innerHTML = `${wind}`;
  description.innerHTML = `${descrip}`;
  city.innerHTML = `${cityN}`;
  icony.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${icon}.png`
  );
}

function search(city) {
  let apiKey = "b08da173443fa6f2c4et5o305194497a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityName = document.querySelector("#city-input");
  search(cityName.value);
}
let form = document.querySelector("#city-form");
form.addEventListener("submit", handleSubmit);

search("Paris");
