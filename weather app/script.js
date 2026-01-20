console.log("hello js");
const Api_key="00051739486d47689c4132640262001";


let temp=document.querySelector("#temp");
let con=document.querySelector("#condition");
let isDay=document.querySelector("#isDay");
let cloud=document.querySelector("#cloud");
let feelsF=document.querySelector("#feelsF");
let windChillC=document.querySelector("#windChillC");
let windChillF=document.querySelector("#windChillF");
let heatIndex=document.querySelector("#heatIndex");
let dewC=document.querySelector("#dewC");
let dewF=document.querySelector("#dewF");
let windMph=document.querySelector("#windMph");
let windDeg=document.querySelector("#windDeg");
let gustMph=document.querySelector("#gustMph");
let gustKph=document.querySelector("#gustKph");
let humidity=document.querySelector("#humidity");
let pressure=document.querySelector("#pressure");
let precipIn=document.querySelector("#precipIn");
let precipMm=document.querySelector("#precipMm");
let visibility=document.querySelector("#visibility");
let shortRad=document.querySelector("#shortRad");
let dni=document.querySelector("#dni");
let diffuse=document.querySelector("#diffuse");
let gti=document.querySelector("#gti");
let city=document.querySelector(".city");
let srch=document.querySelector(".search");
let uv=document.querySelector("#uv");
let wind_dir=document.querySelector("#windDir");
let weather=document.querySelector(".weather");

function getWeatherEmoji(condition) {
  condition = condition.toLowerCase();

  if (condition.includes("sunny") || condition.includes("clear")) {
    return "☀️";
  } 
  else if (condition.includes("cloud")) {
    return "☁️";
  }
  else if (condition.includes("rain")) {
    return "🌧️";
  }
  else if (condition.includes("thunder")) {
    return "⛈️";
  }
  else if (condition.includes("snow")) {
    return "❄️";
  }
  else {
    return "🌤️";
  }
}


async function getWeather(city) {

  const url = `https://api.weatherapi.com/v1/current.json?key=c0d6512f5436401b9e9125257260901&q=${city}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    console.log(data);
    temp.innerHTML = data.current.temp_f;
    // temp_f.innerHTML = data.current.temp_f;
    isDay.innerHTML = data.current.is_day === 1 ? "Yes ☀️" : "No 🌙";


    let condition = data.current.condition.text;
    con.innerHTML=data.current.condition.text;
    let icon = getWeatherEmoji(condition);
    document.getElementById("weather-icon").innerHTML = icon;

    windMph.innerHTML = data.current.wind_mph;
    // windKph.innerHTML = data.current.wind_kph;
    windDeg.innerHTML = data.current.wind_degree;
    wind_dir.innerHTML = data.current.wind_dir;
    pressure.innerHTML = data.current.pressure_in;
    // pressure_in.innerHTML = data.current.pressure_in;
    precipMm.innerHTML = data.current.precip_mm;
    precipIn.innerHTML = data.current.precip_in;
    humidity.innerHTML = data.current.humidity;
    cloud.innerHTML = data.current.cloud;
    // feelslike_c.innerHTML = data.current.feelslike_c;
    feelsF.innerHTML = data.current.feelslike_f;
    windChillC.innerHTML = data.current.windchill_c;
    windChillF.innerHTML = data.current.windchill_f;
    heatIndex.innerHTML = data.current.heatindex_f;
    // heatindex_f.innerHTML = data.current.heatindex_f;
    dewC.innerHTML = data.current.dewpoint_c;
    dewF.innerHTML = data.current.dewpoint_f;
    // visibility.innerHTML = data.current.vis_km;
    visibility.innerHTML = data.current.vis_miles;
    uv.innerHTML = data.current.uv;
    gustMph.innerHTML = data.current.gust_mph;
    gustKph.innerHTML = data.current.gust_kph;
    shortRad.innerHTML = data.current.short_rad;
    diffuse.innerHTML = data.current.diff_rad;
    dni.innerHTML = data.current.dni;
    gti.innerHTML = data.current.gti;
  } catch (error) {
    console.error("Error:", error.message);
    alert(error.message);
  }finally{
    document.getElementById("loader").style.display = "none";
  }
}
// getWeather("london");
const search = () => {
  const value = city.value.trim();
  if (value === "") return;

  // Show spinner first
  document.getElementById("loader").style.display = "block";

  // Add delay before calling API
  setTimeout(() => {
    getWeather(value);
    weather.innerHTML=`🌤️ Weather in ${value}`
  }, 1000);   // 1 second delay
};

// const search= () =>{
//   const value=city.value.trim();
//   if(value==="") return;

//   getWeather(value);
//   weather.innerHTML=`🌤️ Weather in ${value}`
// }
srch.addEventListener("click",search);
city.addEventListener("keydown",(e) =>{
    if(e.key==="Enter"){
        search();
    }
})

