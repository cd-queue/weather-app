const apiKey = "f175f2733ab2cc69c7ad9100c1719910";
const wUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchInput = document.querySelector(".search input");
const  searchBtn = document.querySelector(".search button")

async function weatherApi(city) {
    let responce = await fetch(wUrl + `&appid=${apiKey}` + `&q=${city}`);

    if(responce.status == 404)
        {
        document.querySelector(".error").style.display = "block"
    }
    else {

        let data = await responce.json();
        let icon = document.querySelector(".weather-icone")
        console.log(data)
        
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "Km/h";
        document.querySelector(".city").innerHTML = data.name;
        
        if(data.weather[0].main == "Mist"){
            icon.src = "assets/mist.png";
        }
        else if(data.weather[0].main == "Clear"){
            icon.src = "assets/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            icon.src = "assets/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            icon.src = "assets/drizzle.png";
        }
        else if(data.weather[0].main == "Clouds"){
            icon.src = "assets/clouds.png";
        }
        else if(data.weather[0].main == "Snow"){
            icon.src = "assets/Snow.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        searchInput.value = "";

    }
}

function searchWeather() {
    let cityName = searchInput.value;
    weatherApi(cityName)
}

searchBtn.addEventListener("click", ()=>{
    searchWeather();
})

searchInput.addEventListener("keydown", (e)=>{
    if(e.key === "Enter") {
        searchWeather();
    }
})