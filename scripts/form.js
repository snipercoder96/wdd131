const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

function populateDropdown() {
    const select = document.getElementById("product");
    if (products.length === 0) {
        const emptyOption = document.createElement("option");
        emptyOption.textContent = "No products available";
        select.appendChild(emptyOption);
        return;
    }
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
}

window.addEventListener("DOMContentLoaded", populateDropdown);

const product = document.getElementById("product");
const rating = document.getElementById("rating1");
const date = document.getElementById("date");

function clearErrors() {
    document.querySelectorAll(".error").forEach(el => el.classList.remove("error"));
    document.querySelectorAll(".error-message").forEach(el => el.remove());
}

function validateForm() {
    let isValid = true;
    clearErrors();
    if (product.value === "" || product.value === "default") {
        showError("product", "Please choose a product");
        isValid = false;
    }
    if (rating.value === "" || rating.value === "default") {
        showError("rating1", "Please give a rating");
        isValid = false;
    }
    if (date.value === "" || date.value === "default") {
        showError("date", "Please choose a date");
        isValid = false;
    }
    return isValid;
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    field.classList.add("error");
    const errorMessage = document.createElement("span");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = message;
    field.parentNode.insertBefore(errorMessage, field.nextSibling);
}

function saveReview() {
    const reviewData = {
        product: document.getElementById("product").value,
        rating: document.getElementById("rating1").value,
        date: document.getElementById("date").value,
        review: document.getElementById("review").value,
        name: document.getElementById("username").value
    };
    localStorage.setItem("review", JSON.stringify(reviewData));
    let count = localStorage.getItem("reviewCount");
    if (!count) count = 0;
    localStorage.setItem("reviewCount", parseInt(count) + 1);
}

function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
        saveReview();
        window.location.href = "review.html";
    }
}

document.querySelector(".form1").addEventListener("submit", handleSubmit);
