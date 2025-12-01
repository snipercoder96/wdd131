/*--------------- Date in the footer ------------------- */
const currentYear = document.getElementById("currentYear");
const lastModified = document.getElementById("lastModified");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = new Date().toLocaleString();



/*----------------- Hamburger button ---------------------*/

const button = document.getElementById("ham-Btn");
const navigation = document.getElementById("ham-nav");

button.addEventListener("click", () => {
    navigation.classList.toggle("active");

    if (navigation.classList.contains("active")) {
        button.textContent = "X";
    } else {
        button.textContent = "☰";
    }
});

/*---------------------------TIP OF THE DAY ------------------------- */
const tips = [
    "Use semantic HTML for better accessibility.",
    "Always set box-sizing: border-box to avoid layout issues.",
    "Flexbox is great for one-dimensional layouts; Grid for two-dimensional layouts.",
    "Use Box-sizing property to get fixed sizes for images.",
    "Preload your hero image to improve Largest Contentful Paint (LCP).",
    "Keep CSS class names modular to avoid collisions and confusions.",
    "Use alt attributes on images for accessibility and SEO (Search Engine Optimization).",
    "Test your site on mobile first for responsive design, then move on to larger devices.",
    "Minify CSS and JS files to improve performance.",
    "Use aspect-ratio to prevent layout shifts with images."
];

const todayInDays = Math.floor(Date.now() / 86400000); // In 24 hours, there is 86 million 400 000 seconds

const tipIndex = todayInDays % tips.length;
const tipOfTheDay = tips[tipIndex];

document.getElementById("tipOfTheDay").textContent = tipOfTheDay;

console.log(Date.now())