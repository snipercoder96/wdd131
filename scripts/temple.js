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