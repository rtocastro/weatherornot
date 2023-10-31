
var citysearchbutton = document.getElementById("citySearch")
var userinput = document.getElementById("city")

// //Using the 5 Day Weather Forecast API, you'll notice that you will 
// //need to pass in coordinates instead of just a city name. Using the 
// //OpenWeatherMap APIs, how could we retrieve geographical coordinates given a city name?
function start(){

   getCurrentWeather(userinput.value)
   getForecastWeather(userinput.value)
}

function getCurrentWeather(cityName){

    var weathercall = "http://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&appid=17991d912ecf9f915449bc8b0469a6f4&units=imperial"



    fetch(weathercall)
    .then (function (response){
    return response.json();
        
    }).then (function(data){
    
        console.log(data)
        // access the data and target the elements in html and add the content to the page

    })
}

function getForecastWeather(cityName){

    var weathercall = "http://api.openweathermap.org/data/2.5/forecast?q="+ cityName +"&appid=17991d912ecf9f915449bc8b0469a6f4"



    fetch(weathercall)
    .then (function (response){
    return response.json();
        
    }).then (function(data){
    
        console.log(data)
        for(var i =0; i< 5; i++){
            console.log(i);
        }
    })
}


citysearchbutton.addEventListener("click", start)




//GIVEN a weather dashboard with form inputs
//WHEN I search for a city
//THEN I am presented with current and future conditions for that city and that city is added to the search history
//WHEN I view current weather conditions for that city
//THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
//WHEN I view future weather conditions for that city
//THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
//WHEN I click on a city in the search history
//THEN I am again presented with current and future conditions for that city