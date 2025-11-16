/* Practicing in progress..... 

1. Event handling */


// Make the Alert button trigger a popup message when clicked.

const alertButton = document.getElementById("btn-alert");
const textAlert = "This is DOM Manipulation";



alertButton.addEventListener("click", () => {

    alert(alertButton); // Takes exactly 1 argument

});


// Change When clicked, it should update the heading’s text to something new.
const changeButtonH2 = document.getElementById("btn-change-text");
const heading = document.getElementById("heading");

changeButtonH2.addEventListener("click", () => {

    heading.innerHTML = "<h2><strong>Button has been pressed.</strong></h2>";
});

// Toggle Color Button -> When clicked, it should add / remove the.highlight class on the heading, switching its style on and off.
const toggleButton1 = document.getElementById("btn-toggle-color");

toggleButton1.addEventListener("click", () => {
    toggleButton1.classList.toggle("highlight");
})