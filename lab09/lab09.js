const apiurl = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&models=gfs_seamless"
    try {
        const response = await fetch(apiURL);
        const data = await repsonse.json();
        const currentTemperature = data.current.temperature_2m;
        const currentPrecipitation = data.current.precipitation;
        const cloudCover = data.current.cloud_cover;

        document.getElementById('temperature').textContent = Math.round(currentTemperature);
        document.getElementById('precipitation').textContent = currentPrecipitation;
        
        const emojiContainer = document.getElementById('cloud-emoji');
        if (cloudCover > 50) {
            emojiContainer.textContent = "☁️";
        } else {
            emojiContainer.textContent = "☀️";
        }    
} catch (error) {
    console.error("Error");
}

fetchWeather();