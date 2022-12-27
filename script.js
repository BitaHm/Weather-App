let apiKey = "db76eb94032db381b6033ef59e08505b";

function search (event){
    event.preventDefault();
    let city = document.querySelector("#search-field");
    city = city.value;
    let h1 = document.querySelector("#city-name");
    h1.innerHTML = city;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=db76eb94032db381b6033ef59e08505b&units=metric`
    axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);

        function showTemperature(response) {
            console.log(response.data)
            /// data select
            let temperature = Math.round(response.data.main.temp);
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
            /// modify
            temperatureElement.innerHTML = `${temperature}°C`;
            description.innerHTML = response.data.weather[0].description;
            pressureElement.innerHTML = `${pressure}`;
            windSpeedElement.innerHTML = `${wind} km/hr`;
            airHumidityElement.innerHTML = `${humidity}%`;
            max.innerHTML = `${high}°C`;
            min.innerHTML = `${low}°C`;
            
        }

}

let searchCity = document.querySelector("#searchButton");
searchCity.addEventListener("click" , search);


// Day & Hour
let today = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = days[today.getDay()];
let hour = today.getHours();
let minutes = today.getMinutes();

let newDayTime = document.querySelector("#dayTime");
newDayTime.innerHTML = `${day} ${hour}:${minutes}`
