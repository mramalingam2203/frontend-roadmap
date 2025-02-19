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
                
                document.getElementById("weatherInfo").innerHTML = `
                    <h3>${data.name}, ${data.sys.country}</h3>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                `;
            } catch (error) {
                document.getElementById("weatherInfo").innerHTML = `<p>Error fetching data</p>`;
            }
        }