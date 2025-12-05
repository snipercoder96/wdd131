/*------------------------- HAMBURGER BUTTON---------------- */
const button = document.getElementById("ham-Btn");
const navigation = document.getElementById("ham-nav");


button.addEventListener("click", () => {
    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        button.textContent = "X";
        button.classList.add("spin");
    }
    else {
        button.textContent = "☰";
        button.classList.remove("spin");
    };
});

/*---------------------------TIP OF THE DAY ------------------------- */
const tips = [
    "Use semantic HTML for better accessibility.",
    "Always set box-sizing: border-box to avoid layout issues.",
    "Flexbox is great for one-dimensional layouts; Grid for two-dimensional layouts.",
    "Use Box-sizing property to get fixed sizes for images.",
    "Preload your hero image to improve Largest Contentful Paint (LCP).",
    "Keep CSS class names modular to avoid collisions and confusions.",
    "Use alt attributes on images for accessibility and SEO.",
    "Test your site on mobile first for responsive design, then move on to larger devices.",
    "Minify CSS and JS files to improve performance.",
    "Use aspect-ratio to prevent layout shifts with images."
];

const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD


let savedDate = localStorage.getItem("tipDate");
let savedTip = localStorage.getItem("tipText");

let tipOfTheDay;

if (savedDate === today && savedTip) {
    // Already have today's tip
    tipOfTheDay = savedTip;
} else {
    const todayInDays = Math.floor(Date.now() / 86400000); // 24 hours is === to 86 million 400 000 seconds
    const tipIndex = todayInDays % tips.length;
    tipOfTheDay = tips[tipIndex];

    // save it for today
    localStorage.setItem("tipDate", today);
    localStorage.setItem("tipText", tipOfTheDay);
}

document.getElementById("tipOfTheDay").textContent = tipOfTheDay;

/*------------------------GET COUNTER FOR NEXT TIP ------------------- */
function getCountDown() {
    const now = new Date();
    const tomorrow = new Date();
    tomorrow.setHours(24, 0, 0, 0);

    let timeDiff = tomorrow - now;

    const hours = Math.floor(timeDiff / (1000 * 60 * 60)); // milliseconds
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    document.getElementById("loading-tip").textContent =
        `Next tip in: ${hours}h ${minutes}m ${seconds}s`;
    
    if (timeDiff <= 0) {
        const today = new Date().toISOString().split("T")[0]; 
        const todayInDays = Math.floor(Date.now() / 86400000);
        const tipIndex = todayInDays % tips.length;
        const newTip = tips[tipIndex];

        localStorage.setItem("tipDate", today);
        localStorage.setItem("tipText", newTip);

        document.getElementById("tipOfTheDay").textContent = `⭐ ${newTip}`;
    }
}

getCountDown();

setInterval(getCountDown, 1000);

/*---------------------------------------LAST MODIFIED---------------------------------- */
function footerDate() {
    const currentYear = document.getElementById("currentYear");
    const lastModified = document.getElementById("lastModified");

    currentYear.textContent = new Date().getFullYear();
    lastModified.textContent = `Last Modified: ${new Date().toLocaleString()}`;
}

footerDate();


console.log(Date.now())
