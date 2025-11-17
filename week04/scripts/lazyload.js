const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;


/* Playing around with h1 */
const h1 = document.querySelector("h1");
h1.textContent = "LazyLoading Images Demonstration";
h1.style.textAlign = "center";
h1.style.color = "rgba(122, 255, 5, 1)";
h1.style.backgroundColor = "#000";
h1.style.padding = "20px 0";
h1.style.margin = "0 0 30px 0";


const title = document.querySelector("title");
title.textContent = "Lazy loading images";