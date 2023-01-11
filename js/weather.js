 const API_KEY="da5a099c8fb319bf41e24ff7188305ff";
               
function onGeoOk(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}` 
    
    fetch(url)
    .then(response =>response.json())
    .then(data => {
        const city = document.querySelector("#weather span:last-child ");
        const weather = document.querySelector("#weather span:first-child ");

    city.innerText ="City : " + data.name ;
    
    weather.innerText ="Weather : " + data.weather[0].main ;

    });

}
function onGeoError(){
alert("Can't find you. NO WEATHER FOR YOU")
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError); 

