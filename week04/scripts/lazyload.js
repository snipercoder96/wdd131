const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;

const h1 = document.querySelector("h1");
h1.textContent = "LazyLoading Images Demonstration";
h1.style.textAlign = "center";
h1.style.color = "rgb(74, 158, 0)";