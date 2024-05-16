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
const  h1 = document.querySelector("#currentDate");
const  encen = document.querySelector("#mode");
const  message= document.querySelector("#message");
const  message1 =document.querySelector("h2 > span.label");
const  message2 = document.querySelector("span.visits");
const  message3 = document.querySelector("#gallery-header > h2");
const  contactin = document.querySelector("#contact-info");
const navmenu = document.querySelector("#nav-menu");




modeButton.addEventListener("click", () => {
  if (modeButton.textContent.includes("🌝")) {
    main.style.background = "var(--primary-color)";
    header.style.background = "var(--primary-color)";
    footer.style.background = "var(--primary-color)";
    menu.style.background = "var(--primary-color)";
    contact.style.background = "var(--primary-color)";
    dev.style.background = "var(--primary-color)";
    dev.style.color ="#fff"
    h1.style.color = "#fff";
    encen.style.color = "#fff";
    message.style.color = "#fff";
    message1.style.color = "#fff";
    message2.style.color= "#fff";
    message3.style.color= "#fff";
    contactin.style.background="var(--accent3-color)";
    navmenu.style.background ="var(--accent1-color)";


    modeButton.textContent = "Light Mode 💡";
  } else {
    main.style.background = "#fff";
    header.style.background = "var(--accent1-color)";
    contact.style.background = "var(--accent1-color)";
    dev.style.background = "var(--primary-color)"
    menu.style.background = "#03045e";
    h1.style.color = "#000";
    encen.style.color = "#000";
    message.style.color = "#000";
    message1.style.color = "#000";
    message2.style.color= "#000";
    message3.style.color= "#000";
    

    modeButton.textContent = "Dark Mode 🌝 ";
  }
});





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


// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
  visitsDisplay.textContent = ` ${numVisits}`;
} else {
  visitsDisplay.textContent = `First Visit!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.

document.addEventListener("DOMContentLoaded", function () {
  const lastVisit = localStorage.getItem("lastVisit");

  if (lastVisit) {
    const currentDate = Date.now();
    const timeDifference = currentDate - parseInt(lastVisit);
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    const messageElement = document.getElementById("message");

    if (daysDifference === 0) {
      messageElement.textContent = "Back so soon! Awesome!";
    } else {
      messageElement.textContent = `You last visited ${daysDifference} days ago.`;
    }
  } else {
    localStorage.setItem("lastVisit", Date.now());
    document.getElementById("message").textContent =
      "Welcome! Let us know if you have any questions.";
  }
});