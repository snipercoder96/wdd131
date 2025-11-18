const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "La Paz Bolivia Temple",
        location: "Avenida Los Sauces and Calle 8 de Calacoto in the Calacoto neighborhood of La Paz",
        dedicated: "2021, October, 3",
        area: 18850,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/la-paz-bolivia-temple/la-paz-bolivia-temple-44435.jpg"
    },

    {
        templeName: "Vancouver British Columbia Temple",
        location: "Langley, British Columbia",
        dedicated: "2010, May, 2",
        area: 28165,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/vancouver-british-columbia-temple/vancouver-british-columbia-temple-3283.jpg"
    },

    {
        templeName: "Oakland California Temple",
        location: "Oakland, California  94602-2535 United States",
        dedicated: "1964, November, 19",
        area: 80157,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/oakland-california-temple/oakland-california-temple-2654-main.jpg"
    }
];

// Created a main div to style the document.
const divContainer = document.querySelector(".grid");


// Home link

document.getElementById("home").addEventListener("click", () => {

    // Displays all the temples.
    temples.forEach(temple => {
        const pictCard = document.createElement("div");
        pictCard.classList.add("temple-card");

        pictCard.innerHTML = `
    <h2>${temple.templeName}</h2>
    <p><strong>Location:</strong> ${temple.location}</p>
    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
    <p><strong>Size:</strong> ${temple.area}</p>
    <img src="${temple.imageUrl}" alt="An image of All the temples " loading="lazy" width="350" height="250">
    `;

        divContainer.appendChild(pictCard);
    });

});


// Instead of taking int, use date function to aggregate.
// If possible, use ternary operator condition ? true : flase

document.getElementById("old").addEventListener("click", () => {

    const oldestTemple = temples.reduce((oldest, temple) => { // returns only a singe temple
        const currentDate = new Date(temple.dedicated);
        const oldestDate = new Date(oldest.dedicated);
        return currentDate < oldestDate ? temple : oldest; // Ternary operator
    });

    const container = document.querySelector(".grid");
    container.innerHTML = ""; // Ensure its cleared because it can stack multiple cards

    const pictCard = document.createElement("div");
    pictCard.classList.add("temple-card");
    pictCard.innerHTML = `
    <h2>${oldestTemple.templeName}</h2>
    <p><strong>Location:</strong> ${oldestTemple.location}</p>
    <p><strong>Dedicated:</strong> ${oldestTemple.dedicated}</p>
    <p><strong>Size:</strong> ${oldestTemple.area}</p>
    <img src="${oldestTemple.imageUrl}" alt="An image of ${oldestTemple.templeName}" loading="lazy" width="350" height="250">
  `;

    container.appendChild(pictCard);

});

// Newest temple
document.getElementById("new").addEventListener("click", () => {

    const newestTemple = temples.reduce((newest, temple) => { // returns only a singe temple Newer
        const currentDate = new Date(temple.dedicated);
        const newestDate = new Date(newest.dedicated);
        return currentDate > newestDate ? temple : newest; // Ternary operator
    });

    const container = document.querySelector(".grid");
    container.innerHTML = ""; // Ensure its cleared because it can stack multiple cards

    const pictCard = document.createElement("div");
    pictCard.classList.add("temple-card");
    pictCard.innerHTML = `
    <h2>${newestTemple.templeName}</h2>
    <p><strong>Location:</strong> ${newestTemple.location}</p>
    <p><strong>Dedicated:</strong> ${newestTemple.dedicated}</p>
    <p><strong>Size:</strong> ${newestTemple.area}</p>
    <img src="${newestTemple.imageUrl}" alt="An image of ${newestTemple.templeName}" loading="lazy" width="350" height="250">
  `;

    container.appendChild(pictCard);

});


// largest area
document.getElementById("large").addEventListener("click", () => {

    const largestTemple = temples.reduce((largest, temple) => {
        return temple.area > largest.area ? temple : largest;
    });

    const container = document.querySelector(".grid");
    container.innerHTML = "";

    const pictCard = document.createElement("div");
    pictCard.classList.add("temple-card");
    pictCard.innerHTML = `
    <h2>${largestTemple.templeName}</h2>
    <p><strong>Location:</strong> ${largestTemple.location}</p>
    <p><strong>Dedicated:</strong> ${largestTemple.dedicated}</p>
    <p><strong>Size:</strong> ${largestTemple.area}</p>
    <img src="${largestTemple.imageUrl}" alt="An image of ${largestTemple.templeName}" loading="lazy" width="350" height="250">
  `;

    container.appendChild(pictCard);

});

// Smallest area
document.getElementById("small").addEventListener("click", () => {

    const smallestTemple = temples.reduce((smallest, temple) => {
        return temple.area < smallest.area ? temple : smallest;
    });

    const container = document.querySelector(".grid");
    container.innerHTML = "";

    const pictCard = document.createElement("div");
    pictCard.classList.add("temple-card");
    pictCard.innerHTML = `
    <h2>${smallestTemple.templeName}</h2>
    <p><strong>Location:</strong> ${smallestTemple.location}</p>
    <p><strong>Dedicated:</strong> ${smallestTemple.dedicated}</p>
    <p><strong>Size:</strong> ${smallestTemple.area}</p>
    <img src="${smallestTemple.imageUrl}" alt="An image of ${smallestTemple.templeName}" loading="lazy" width="350" height="250">
  `;

    container.appendChild(pictCard);

});

// add the date

const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").textContent = lastModified;



// For mobile and desktop



const menuOpen = document.querySelector("button");
const displayMenu = document.querySelector("nav");

menuOpen.addEventListener("click", function () {
    displayMenu.classList.toggle("open");

    if (window.innerWidth <= 999) {
        if (displayMenu.classList.contains("open")) {   // if doesn't exist add the class
            menuOpen.textContent = "X";

            // If the open class exists, delete the class open
        } else {
            menuOpen.textContent = "☰"
        }
    }

});