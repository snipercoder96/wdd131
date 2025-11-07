

const hamburgerButton = document.querySelector(".menu-toggle");
const navlinks = document.querySelector(".nav-links");

hamburgerButton.addEventListener("click", function () {
    navlinks.classList.toggle("open")

    if (navlinks.classList.contains("open"))
    {
        hamburgerButton.textContent = "X";
    } else {
        hamburgerButton.textContent = "☰";
    }
})