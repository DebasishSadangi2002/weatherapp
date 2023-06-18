const url = "https://open-weather13.p.rapidapi.com/city/"
//const apiKey = "";
//const apiUrl = "";
//const searchBox = document.querySelector(".search input");
//const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather icon");
const imageElement = document.querySelector(".weathericon");
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f186bfe932msh57bbc230c8da6cfp1b9e48jsnca60beb4f89b',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};
function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
  }
function checkWeather(city) {
    const apiUrl = url + city;
  
    fetch(apiUrl, options)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let cityname = data.name;
        let temp = data.main.temp;
        let humidity = data.main.humidity;
        let wind = data.wind.speed;
        document.querySelector('.temp').textContent = Math.floor(fahrenheitToCelsius(temp))+'°C';
        document.querySelector('.city').textContent = cityname;
        document.querySelector('.humidity').textContent = humidity+'%';
        document.querySelector('.wind').textContent = wind+"km/hr";
        if(data.weather[0].main === "Clouds"){
            imageElement.src = "images/clouds.png";
        }
        if(data.weather[0].main === "Clear"){
            imageElement.src = "images/clear.png";
        }
        if(data.weather[0].main === "Drizzle"){
            imageElement.src = "images/drizzle.png";
        }
        if(data.weather[0].main === "Mist"){
            imageElement.src = "images/mist.png";
        }
        if(data.weather[0].main === "Rain"){
            imageElement.src = "images/rain.png";
        }
        if(data.weather[0].main === "Snow"){
            imageElement.src = "images/clouds.png";
        }
        if(data.weather[0].main === "Haze"){
            imageElement.src = "images/clouds.png";
        }
        if(data.weather[0].main === "Thunderstorm"){
            imageElement.src = "images/rain.png";
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  
  function myFunction(){
    const cityInput = document.querySelector('.search input');
    const city = cityInput.value.trim();
    checkWeather(city);
  }
