// Write a fetch request to the Giphy API
var weatherAPI = "api.openweathermap.org/data/2.5/weather?q={48}&appid=53cd6e2725805df5b134360f4870a02f"
// Then log the response in the console
fetch(weatherAPI).then(function(response){
    response.json().then(function(data) {
        console.log(data);
    })
})