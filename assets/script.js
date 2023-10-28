var weather = "weather.com/api"

fetch(weather)
.then(function (response){

return response.json();
})

.then (function (data) {
    console.log(data)

})