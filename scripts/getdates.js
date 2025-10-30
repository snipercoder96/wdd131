// Initialize the variable and strip to the year 2025 only
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// This sets the text inside the span
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;