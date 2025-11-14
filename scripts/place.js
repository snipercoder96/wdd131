
// Initialize the variable and strip to the year 2025 only
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// This sets the text inside the span
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;


/* Weather for Javascript */
document.addEventListener("DOMContentLoaded", () => {
    const temp = 23;   // temperature in °C
    const wind = 20;   // wind speed in km/h

    const temperature = document.getElementById("temp");
    const windSpeed = document.getElementById("wind");
    const windchill = document.getElementById("windchill");

    if (temperature) temperature.textContent = `${temp} °C`;
    if (windSpeed) windSpeed.textContent = `${wind} km/h`;

    function calculateWindChill(temp, speed) {
        return (
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(speed, 0.16) +
            0.3965 * temp * Math.pow(speed, 0.16)
        );
    }

    // Apply conditions
    if (temp <= 10 && wind > 4.8) {
        const wc = calculateWindChill(temp, wind).toFixed(1);
        if (windchill) windchill.textContent = `${wc} °C`;
    } else {
        if (windchill) windchill.textContent = "N/A";
    }
});
    
