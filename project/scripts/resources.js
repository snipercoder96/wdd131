/*--------------HAMBURGER BUTTON------------------ */
const button = document.getElementById("ham-Btn");
const navigation = document.getElementById("ham-nav");

button.addEventListener("click", () => {
    navigation.classList.toggle("active");

    if (navigation.classList.contains("active")) {
        button.textContent = "X";
        button.classList.add("spin");
    } else {
        button.textContent = "☰";
        button.classList.remove("spin");
    }
});

/*---------------------DATE FOOTER----------------------------- */

const currentYear = document.getElementById("currentYear");
const lastModified = document.getElementById("lastModified");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${new Date().toLocaleString()}`;