//Made variables for the button and input


var citysearchbutton = document.getElementById("citySearch")
var userinput = document.getElementById("city")
var cardbody = document.getElementsByClassName(".card-body")

function start() {
    getCurrentWeather(userinput.value)
    getForecastWeather(userinput.value)

}

function getCurrentWeather(cityName) {
    var weathercall = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=17991d912ecf9f915449bc8b0469a6f4&units=imperial"

    fetch(weathercall)
        .then(function (response) {
            return response.json();


        }).then(function (data) {

            var nameofcity = document.getElementById("title")
            var weathericon = document.getElementById("iconcurrent")
            var temperature = document.getElementById("temp")
            var humidity = document.getElementById("humid")
            var windspeed = document.getElementById("wind")

            var iconcode = (data.weather[0].icon)
            var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";



            //datetext.textContent = ("Date: " +data.list[2].dt_txt)
            nameofcity.textContent = ("Current Weather for " + data.name)
            weathericon.innerHTML = ("Icon: <img src =" + iconurl + ">")
            temperature.textContent = ("Temperature: " + data.main.temp + " F")
            humidity.textContent = ("Humidity: " + data.main.humidity)
            windspeed.textContent = ("Wind Speed: " + data.wind.speed + " mph")

        })


}





function getForecastWeather(cityName) {

    var weathercall = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=17991d912ecf9f915449bc8b0469a6f4&units=imperial"

    fetch(weathercall)
        .then(function (response) {
            return response.json();

        }).then(function (data) {

            console.log(data.city.name)
            console.log(data.list[0].wind.speed)

            //day 0 of forecast
            var nameofcity0 = document.getElementById("title0")
            var weathericon0 = document.getElementById("icon0")
            var temperature0 = document.getElementById("temp0")
            var humidity0 = document.getElementById("humid0")
            var windspeed0 = document.getElementById("wind0")
            var datetext0 = document.getElementById("date0")

            var iconcode = (data.list[0].weather[0].icon)
            var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

            datetext0.textContent = ("Date: " + data.list[2].dt_txt)
            nameofcity0.textContent = ("Tomorrows Weather for " + data.city.name)
            weathericon0.innerHTML = ("Icon: <img src =" + iconurl + ">")
            temperature0.textContent = ("Temperature: " + data.list[0].main.temp + " F")
            humidity0.textContent = ("Humidity: " + data.list[0].main.humidity)
            windspeed0.textContent = ("Wind Speed: " + data.list[0].wind.speed + " mph")

            //DAY 1 OF FORECAST
            var nameofcity1 = document.getElementById("title1")
            var weathericon1 = document.getElementById("icon1")
            var temperature1 = document.getElementById("temp1")
            var humidity1 = document.getElementById("humid1")
            var windspeed1 = document.getElementById("wind1")
            var datetext1 = document.getElementById("date1")



            var iconcode1 = (data.list[10].weather[0].icon)
            var iconurl1 = "http://openweathermap.org/img/w/" + iconcode1 + ".png";


            datetext1.textContent = ("Date: " + data.list[10].dt_txt)
            nameofcity1.textContent = ("The day after for " + data.city.name)
            weathericon1.innerHTML = ("Icon: <img src =" + iconurl1 + ">")
            temperature1.textContent = ("Temperature: " + data.list[10].main.temp + " F")
            humidity1.textContent = ("Humidity: " + data.list[10].main.humidity)
            windspeed1.textContent = ("Wind Speed: " + data.list[10].wind.speed + " mph")

            //DAY 2 OF FORECAST

            var nameofcity2 = document.getElementById("title2")
            var weathericon2 = document.getElementById("icon2")
            var temperature2 = document.getElementById("temp2")
            var humidity2 = document.getElementById("humid2")
            var windspeed2 = document.getElementById("wind2")
            var datetext2 = document.getElementById("date2")



            var iconcode2 = (data.list[10].weather[0].icon)
            var iconurl2 = "http://openweathermap.org/img/w/" + iconcode2 + ".png";


            datetext2.textContent = ("Date: " + data.list[20].dt_txt)
            nameofcity2.textContent = ("Then the day after that for " + data.city.name)
            weathericon2.innerHTML = ("Icon: <img src =" + iconurl2 + ">")
            temperature2.textContent = ("Temperature: " + data.list[20].main.temp + " F")
            humidity2.textContent = ("Humidity: " + data.list[20].main.humidity)
            windspeed2.textContent = ("Wind Speed: " + data.list[20].wind.speed + " mph")

            //DAY 3 OF FORECAST

            var nameofcity3 = document.getElementById("title3")
            var weathericon3 = document.getElementById("icon3")
            var temperature3 = document.getElementById("temp3")
            var humidity3 = document.getElementById("humid3")
            var windspeed3 = document.getElementById("wind3")
            var datetext3 = document.getElementById("date3")

            var iconcode3 = (data.list[30].weather[0].icon)
            var iconurl3 = "http://openweathermap.org/img/w/" + iconcode3 + ".png";


            datetext3.textContent = ("Date: " + data.list[30].dt_txt)
            nameofcity3.textContent = ("Then after that one for " + data.city.name)
            weathericon3.innerHTML = ("Icon: <img src =" + iconurl3 + ">")
            temperature3.textContent = ("Temperature: " + data.list[30].main.temp + " F")
            humidity3.textContent = ("Humidity: " + data.list[30].main.humidity)
            windspeed3.textContent = ("Wind Speed: " + data.list[30].wind.speed + " mph")

            //DAY 4 OF FORECAST

            var nameofcity4 = document.getElementById("title4")
            var weathericon4 = document.getElementById("icon4")
            var temperature4 = document.getElementById("temp4")
            var humidity4 = document.getElementById("humid4")
            var windspeed4 = document.getElementById("wind4")
            var datetext4 = document.getElementById("date4")

            var iconcode4 = (data.list[39].weather[0].icon)
            var iconurl4 = "http://openweathermap.org/img/w/" + iconcode4 + ".png";


            datetext4.textContent = ("Date: " + data.list[39].dt_txt)
            nameofcity4.textContent = ("And finally the 5th day for " + data.city.name)
            weathericon4.innerHTML = ("Icon: <img src =" + iconurl4 + ">")
            temperature4.textContent = ("Temperature: " + data.list[39].main.temp + " F")
            humidity4.textContent = ("Humidity: " + data.list[39].main.humidity)
            windspeed4.textContent = ("Wind Speed: " + data.list[39].wind.speed + " mph")
        })
}


citysearchbutton.addEventListener("click", start)


//for (i = 0; forecastList.length < 5; i++ ) {
//console.log(data.list[0])


//GIVEN a weather dashboard with form inputs
//WHEN I search for a city
//THEN I am presented with current and future conditions for that city and that city is added to the search history
//WHEN I view current weather conditions for that city
//THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
//WHEN I view future weather conditions for that city
//THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
//WHEN I click on a city in the search history
//THEN I am again presented with current and future conditions for that city