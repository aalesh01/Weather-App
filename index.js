var enteredCity = "";
document.getElementById("sBT").addEventListener("click", function () {
    enteredCity = document.getElementById("cityName").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${enteredCity}&appid=dc9a07e9921bfeeba99d8a41ec7d1512`)
        .then(response => response.json())
        .then(data => {

            console.log(data);
            var card = document.createElement('div');

            var temp = document.createElement('p');
            temp.innerText = "Temperature: " + Math.round(data.main.temp - 273) + '° C';

            var pressure = document.createElement('p');
            pressure.innerText = "Pressue: " + data.main.pressure + ' P';

            var humidity = document.createElement('p');
            humidity.innerText = "Humidity: " + data.main.humidity;

            var windS = document.createElement('p');
            windS.innerText = "Wind Speed: " + data.wind.speed + ' kt';

            var sunRise = document.createElement('p');
            sunRise.innerText = "Sun Rise: " + data.sys.sunrise;

            var sunSet = document.createElement('p');
            sunSet.innerText = "Sun Set: " + data.sys.sunset;

            var weatherD = document.createElement('p');
            weatherD.innerText = "Description: " + data.weather[0].description;

            card.append(temp, pressure, humidity, windS, sunRise, sunSet, weatherD);



            document.getElementById('card').innerHTML = card.innerHTML;


        })

}
)


