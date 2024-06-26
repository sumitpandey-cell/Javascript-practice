

const apiKey = "97f2198f68480742b14c16ec5371d721";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const countryName = document.querySelector(".searchCountry input");
const weatherIcon = document.querySelector(".weatherImage")

async function checkWeather(countryname){
    const response = await fetch(apiUrl+countryname+`&appid=${apiKey}`)
    var data = await response.json();
    console.log(data);
    document.querySelector(".couname").innerText = data.name;
    document.querySelector(".temp").innerText = data.main.temp;
    document.querySelector(".humidityIcon h2").innerText = data.main.humidity;
    document.querySelector(".windSpeedImage h2").innerText = data.wind.speed;
    console.log(typeof(data.main.temp));
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "weather-app-images/clouds.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "weather-app-images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "weather-app-images/mist.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "weather-app-images/rain.png"
    }
    else if(data.weather[0].main == "Haze"){
        weatherIcon.src = "weather-app-images/mist.png"
    }
}
document.querySelector('.searchCountry button').addEventListener("click",(e)=>{
    checkWeather(countryName.value);
})




