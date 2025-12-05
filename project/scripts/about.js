/*------------------ HAMBURGER BUTTON -------------------- */
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


/*------------------------------- DATE -------------------- */
function footerDate() {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${new Date().toLocaleString()}`;
}

footerDate();

/*-----------------FORM------------------------------------ */

const form = document.getElementById("mentor-form");

// grab items into an array → object 


form.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name !== "" && email !== "" && message !== "") {
        const userInfo = { name, email, message }; // object literal
        localStorage.setItem("mentorForm", JSON.stringify(userInfo));
        alert("Form data saved!");
        window.location = "form-submit.html";
    } else {
        alert("Please fill in all fields!");
    }
});




