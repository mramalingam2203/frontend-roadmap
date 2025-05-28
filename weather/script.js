 async function getWeather() {
            const city = document.getElementById("cityInput").value;
            if (city === "") return;
            
            const apiKey = "48a7527ede664c5231b89c332f45f8e0";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
            
            try {
                const response = await fetch(url);
                const data = await response.json();
                
                if (data.cod !== 200) {
                    document.getElementById("weatherInfo").innerHTML = `<p>${data.message}</p>`;
                    return;
                }
                console.log(data);
                document.getElementById("weatherInfo").innerHTML = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p><b>Temperature:</b> ${data.main.temp}°C</p>
                    <p><b>Weather:</b> ${data.weather[0].description}</p>
                    <p><b>Humidity:</b> ${data.main.humidity}%</p>
                    <p><b>Wind Speed:</b> ${data.wind.speed} m/s</p>
                    <p><b>Visibility:</b> ${data.visibility / 1000} km</p>
                    <p><b>Cloudiness:</b> ${data.clouds.all}%</p>
                    <p><b>Sunrise:</b> ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
                    <p><b>Sunset:</b> ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
                    <p><b>Coordinates:</b> ${data.coord.lat}, ${data.coord.lon}</p>

                `;
            } catch (error) {
                document.getElementById("weatherInfo").innerHTML = `<p>Error fetching data</p>`;
            }
        }




