/*-------------------HAMBURGER BUTTON----------------- */
const button = document.getElementById("ham-Btn");
const navigation = document.getElementById("ham-nav");

button.addEventListener("click", () => {
    navigation.classList.toggle("active");

    if (navigation.classList.contains("active"))
    {
        button.textContent = "X";
    } else {
        button.textContent = "☰";
    }
})