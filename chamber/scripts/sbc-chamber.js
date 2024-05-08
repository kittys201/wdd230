let currentDate = new Date();

let dateString = currentDate.toDateString();

document.querySelector("#currentDate").innerHTML = dateString;


//*dark mode

const modeButton = document.querySelector("#mode");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const menu = document.querySelector(".navigation");
const contact =document.querySelector("#contact-info");
const  dev = document.querySelector("#dev-info");

modeButton.addEventListener("click", () => {
  if (modeButton.textContent.includes("🌝")) {
    main.style.background = "#000";
    header.style.background = "#000";
    footer.style.background = "#000";
    menu.style.background = "#000";
    contact.style.background = "#000";
    dev.style.background = "#000";

    modeButton.textContent = "Light Mode 💡";
  } else {
    main.style.background = "#fff";
    header.style.background = "var(--accent1-color)";
    contact.style.background = "var(--accent1-color)";
    dev.style.background = "var(--primary-color)"
    menu.style.background = "#03045e";

    modeButton.textContent = "Dark Mode 🌝 ";
  }
});


// Toggle Dark/Light Mode
function screenMode() {
    const element = document.body;
    element.classList.toggle("dark-mode");

    const sections = document.querySelectorAll(
        "main, current-events, weather-card, company-spotlight1, company-spotlight2, company-spotlight3"
    );
    sections.forEach((section) => {
        section.classList.toggle("dark-mode");
    });
}


//menu hambur

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

// years add
let oLastModif = new Date(document.lastModified);
document.querySelector("#lastModified").textContent = oLastModif;

const options = {
  year: "numeric",
};
