const menuOpen = document.querySelector("button");
const displayMenu = document.querySelector("nav");

menuOpen.addEventListener("click", function () {
    displayMenu.classList.toggle("open");


    if (displayMenu.classList.contains("open")) {   // if doesn't exist add the class
        menuOpen.textContent = "X";

        // If the open class exists, delete the class open
    } else {
        menuOpen.textContent = "☰"
    }
})

// Initialize the variable and strip to the year 2025 only
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// This sets the text inside the span
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;