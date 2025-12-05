/*--------------- Date in the footer ------------------- */
function setFooterDates() {
    const currentYear = document.getElementById("currentYear");
    const lastModified = document.getElementById("lastModified");

    currentYear.textContent = new Date().getFullYear();
    lastModified.textContent = `Last Modified: ${new Date().toLocaleString()}`;
}
setFooterDates();



/*----------------- Hamburger button ---------------------*/
function setupHamburgerMenu() {
    const button = document.getElementById("ham-Btn");
    const navigation = document.getElementById("ham-nav");

    button.addEventListener("click", () => {
        navigation.classList.toggle("active");

        /*----------------------------SPINNER BUTTON -------------------------------- */
        if (navigation.classList.contains("active")) {
            button.textContent = "X";
            button.classList.add("spin");
        } else {
            button.textContent = "☰";
            button.classList.remove("spin");
        }
    });
}
setupHamburgerMenu();



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

function getTipIndex() {
    const todayInDays = Math.floor(Date.now() / 86400000);
    return todayInDays % tips.length;
}

function setTipOfTheDay() {
    const today = new Date().toISOString().split("T")[0];
    const savedDate = localStorage.getItem("tipDate");
    const savedTip = localStorage.getItem("tipText");

    let tipOfTheDay;

    if (savedDate === today && savedTip) {
        tipOfTheDay = savedTip;
    } else {
        tipOfTheDay = tips[getTipIndex()];
        localStorage.setItem("tipDate", today);
        localStorage.setItem("tipText", tipOfTheDay);
    }

    document.getElementById("tipOfTheDay").textContent = tipOfTheDay;
}
setTipOfTheDay();



/*------------------------GET COUNTER FOR NEXT TIP ------------------- */
function getCountDown() {
    const now = new Date();
    const tomorrow = new Date();
    tomorrow.setHours(24, 0, 0, 0);

    let timeDiff = tomorrow - now;

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById("dateOfTip").textContent =
        `Next tip in: ${hours}h ${minutes}m ${seconds}s`;

    if (timeDiff <= 0) {
        setTipOfTheDay(); // refresh tip when countdown ends
    }
}
getCountDown();
setInterval(getCountDown, 1000);



/*------------------------------SPIN BUTTON------------------------- */
function addSpinAndRedirect(buttonId, url) {
    const button = document.getElementById(buttonId);

    button.addEventListener("click", (e) => {
        e.preventDefault();
        button.classList.toggle("spin");
        button.textContent = "Loading...";
        setTimeout(() => {
            window.location.href = url;
        }, 2000);
    });
}

addSpinAndRedirect("tipsBtn", "tips.html");
addSpinAndRedirect("resourcesBtn", "resources.html");
