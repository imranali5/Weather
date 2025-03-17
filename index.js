const apikey="ba39aec02a827df94f75452d9dc48343"
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric";
// const city="kolkata";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon= document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response= await fetch(apiurl+`&q=${city}&appid=${apikey}`);
    var data = await response.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp+" °C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=Math.round(data.wind.speed*3.6*100)/100+" km/h";
    document.querySelector(".feel").innerHTML=data.main.feels_like+"°C";
    document.querySelector(".wind_deg").innerHTML=data.wind.deg+"°";
    if(data.weather[0].main=="Clouds"){
        weathericon.src="./image/cloudy.png";
    }
    else if(data.weather[0].main=="Clear"){
        weathericon.src="./image/sun.png";
    }
    else if(data.weather[0].main=="Rain"){
        weathericon.src="./image/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weathericon.src="./image/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weathericon.src="./image/mist.png";
    }
    else if(data.weather[0].main=="Haze"){
        weathericon.src="./image/haze.png";
    }
    else if(data.weather[0].main=="Snow"){
        weathericon.src="./image/snow.png";
    }
    
    
    
}

searchbtn.addEventListener("click",()=>{
      checkWeather(searchbox.value);
})


// ----------------------------------------------------------------------------------




 async function gotlocation(position){
    console.log(position);
    
   let lat=position.coords.latitude;
   let lon=position.coords.longitude;

 const res= await fetch(apiurl+`&lat=${lat}&lon=${lon}&appid=${apikey}`);
    var data=await res.json();
     
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp+" °C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=Math.round(data.wind.speed*3.6*100)/100+" km/h";
    document.querySelector(".feel").innerHTML=data.main.feels_like+"°C";
    document.querySelector(".wind_deg").innerHTML=data.wind.deg+"°";
    if(data.weather[0].main=="Clouds"){
        weathericon.src="./image/cloudy.png";
    }
    else if(data.weather[0].main=="Clear"){
        weathericon.src="./image/sun.png";
    }
    else if(data.weather[0].main=="Rain"){
        weathericon.src="./image/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weathericon.src="./image/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weathericon.src="./image/mist.png";
    }
    else if(data.weather[0].main=="Haze"){
        weathericon.src="./image/haze.png";
    }
    else if(data.weather[0].main=="Snow"){
        weathericon.src="./image/snow.png";
    }
}
function faildtoget(){
    console.log("sorry! we did not face your location");
    
}
navigator.geolocation.getCurrentPosition(gotlocation,faildtoget);


