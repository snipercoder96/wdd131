
// Initialize the variable and strip to the year 2025 only
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// This sets the text inside the span
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;


/* Weather for Javascript */

const temperature = 20;
const windSpeed = 12;

function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

document.addEventListener("DOMContentLoaded", (temp, speed) =>{
    let windChill = "N/A";

    if (temperature <= 20 && windSpeed >= 12)
    {
        windChill = calculateWindChill(temperature, windSpeed).toFixed(1);
            //shows in 1 decimal places
        
    } else {
        windChill = "N/A";
    }

    // Get id and assign it to windchill value
    document.getElementById("windchill").textContent = windChill;

    document.getElementById("temp").innerHTML = temperature;
    document.getElementById("wind").innerHTML = windSpeed;
})