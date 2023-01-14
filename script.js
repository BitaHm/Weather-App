


let apiKey = "db76eb94032db381b6033ef59e08505b";

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#search-field");
  city = city.value;
  let h1 = document.querySelector("#city-name");
  h1.innerHTML = city;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=db76eb94032db381b6033ef59e08505b&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
/* API Keys didnt work
function getForecast(coordinates){
  let apiKey = "8161b4309ee03faae957729ba7104797";
  let apiURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid${apiKey}&units=metric`
  axios.get(apiURL).then(showTemperature);
}

*/
function showTemperature(response) {

  celesiusTemp = Math.round(response.data.main.temp);
  /// data select
  let temperature = Math.round(celesiusTemp);
  let pressure = Math.round(response.data.main.pressure);
  let humidity = Math.round(response.data.main.humidity);
  let high = Math.round(response.data.main.temp_max);
  let low = Math.round(response.data.main.temp_min);
  let wind = Math.round(response.data.wind.speed);

  /// element select
  let temperatureElement = document.querySelector("#current-temp");
  let description = document.querySelector("#weather-description");
  let pressureElement = document.querySelector("#air-pressure");
  let windSpeedElement = document.querySelector("#wind-speed");
  let airHumidityElement = document.querySelector("#air-humidity");
  let max = document.querySelector("#high");
  let min = document.querySelector("#low");
  let iconElement = document.querySelector("#current-icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  /// modify
  temperatureElement.innerHTML = `${temperature}`;
  description.innerHTML = response.data.weather[0].description.toUpperCase();
  pressureElement.innerHTML = `${pressure}`;
  windSpeedElement.innerHTML = `${wind} km/hr`;
  airHumidityElement.innerHTML = `${humidity}%`;
  max.innerHTML = `${high}°C`;
  min.innerHTML = `${low}°C`;

  
}

let searchCity = document.querySelector("#searchButton");
searchCity.addEventListener("click", search);

/*
function displayForcast (){
  let forecast = document.querySelector("#forecastday");

  let forecastHTML = `<div class ="row">`;

  let dayofWeek = ["Thu", "Fri", "Sat"];
  dayofWeek.forEach(function(day){

    forecastHTML =  
    forecastHTML + `
    <div class="col-2 forecast">
          <div class="day">
            <div class="col-3">${day}</div>
          </div>
          <div class="icon">
            <div class="col-3"><img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" /></div>
          </div>
          <div class="temp">
            <div class="col-3">5°C</div>
          </div>
          </div>`;
  })

        forecastHTML =  forecastHTML + `<div/>`

        forecast.innerHTML = forecastHTML
  }
  
displayForcast();
*/

// Day & Hour
let today = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[today.getDay()];
let hour = today.getHours();
let minutes = today.getMinutes();

let newDayTime = document.querySelector("#dayTime");
newDayTime.innerHTML = `${day} ${hour}:${minutes}`;

/// C to F

let faranhait = document.querySelector("#faranhait");

function convertToF(event) {
  event.preventDefault();
  celesius.classList.remove("active");
  faranhait.classList.add("active");
  let fTemp = Math.round(celesiusTemp * 9) / 5 + 32;
  let tempToF = document.querySelector("#current-temp");
  tempToF.innerHTML = Math.round(fTemp);
}

let celesiusTemp = null;

faranhait.addEventListener("click", convertToF);


let celesius = document.querySelector("#celecius");


function convertToCelesius(event){
    event.preventDefault();
    celesius.classList.add("active");
    faranhait.classList.remove("active");
    let tempToC = document.querySelector("#current-temp");
    tempToC.innerHTML = Math.round(celesiusTemp);
}

celesius.addEventListener("click", convertToCelesius)



//showTemperature();
