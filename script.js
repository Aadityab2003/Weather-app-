const apiKey="97ce5be0123e2249eb9bcaba9d70dd5c";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bangalore";


async function checkWeather(){
    const response=await fetch(apiUrl + `&appid=${apiKey}`);
    var data=await response.json();

    console.log(data)
}
checkWeather();
