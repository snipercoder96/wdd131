window.addEventListener("DOMContentLoaded", () => {
    const savedForm = localStorage.getItem("mentorForm");
    if (savedForm) {
        const userInfo = JSON.parse(savedForm); // convert string back to object
        
        const name = document.getElementById("mentorForm-name");
        const email = document.getElementById("mentorForm-email");
        const message = document.getElementById("mentorForm-message");

        name.textContent = userInfo.name;
        email.textContent = userInfo.email;
        message.textContent = userInfo.message;
    }
}); 

// get time saved

document.getElementById("time-saved").textContent = `Time saved in: ${new Date()}`;