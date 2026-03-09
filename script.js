const Search = async () => {
    let CityName = document.getElementById('inputCity').value

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=5b4bee0ba241d092159faf007e166080&units=metric`)
        if (response.status == 404) {
            alert('invalid city name')
        }
        console.log(response);
        const res = await response.json()
        document.getElementById("homepage").style.display="none"
        console.log(res);
        const cityDetails = res
        console.log(cityDetails);

        const weatherType = cityDetails.weather[0].main;
        console.log(weatherType);

        if (weatherType === "Clouds") {
           document.querySelector(".full-content").style.backgroundImage = "url('images/cloudy.jpg')";
        }
        else if (weatherType === "Clear") {
           document.querySelector(".full-content").style.backgroundImage = "url('images/sunny.jpg')";
        }
        else if (weatherType === "Rain") {
          document.querySelector(".full-content").style.backgroundImage = "url('images/rain.jpg')";
        }
        const sunrise = new Date(cityDetails.sys.sunrise * 1000)
            .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

        const sunset = new Date(cityDetails.sys.sunset * 1000)
            .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });


        const displayData = document.getElementById('output')
        displayData.innerHTML = `<div class=" container contents" >
             <div>
                    <h1 style="font-size:60px;">${cityDetails.main.temp}°</h1>
                    <h1>${cityDetails.weather[0].description}</h1>
                    <h2 style="font-size:23px">Feels like ${cityDetails.main.feels_like}°</h2>
             </div>
              <div>
                <p>min-temp:</p>
                <p style="font-weight:bold">${cityDetails.main.temp_min}</p>
                <p>max-temp:</p>
                 <p style="font-weight:bold">${cityDetails.main.temp_max}</p>
             </div>
             <div>
                <p>wind:</p>
               <p style="font-weight:bold">${cityDetails.wind.speed}</p><br>
                <p>pressure:</p>
                <p style="font-weight:bold">${cityDetails.main.pressure}</p>
             </div>
             <div>
                <p>Visibility:</p>
                <p style="font-weight:bold">${cityDetails.visibility / 1000}KM</p><br>
                <p>humidity:</p>
               <p style="font-weight:bold">${cityDetails.main.humidity}</p>
             </div>
             <div>
    <p>Sunrise:</p>
    <p style="font-weight:bold">${sunrise}</p>
    <p>Sunset:</p>
    <p style="font-weight:bold">${sunset}</p>
</div>
         </div>`

    }
    catch (err) {
        console.log(err);

    }
}