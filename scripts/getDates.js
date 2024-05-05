document.addEventListener("DOMContentLoaded", function() {
            function getCopyYear() {
                const year = new Date().getFullYear();
                return ` ${year}`;
            }
            document.getElementById("cYear").innerHTML = getCopyYear();
            

            function getLastModified() {
                const lastModified = new Date(document.lastModified).toGMTString();
                return `Last Modified: ${lastModified}`;
            }
            document.getElementById("lastModified").innerHTML = getLastModified();

            //agregar uso de boton menu
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    hamButton.addEventListener('click', () => { /* Completa el evento de escucha */
	     navigation.classList.toggle('open'); /* Completa la clase que se va a alternar */
	hamButton.classList.toggle('open');
});


//nigth mode
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");


const originalColors = {};
main.querySelectorAll("h1, h2, h3, a, p").forEach(element => {
    originalColors[element.tagName.toLowerCase()] = getComputedStyle(element).color;
});

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🌙")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        modeButton.textContent = "☀️";
        
        main.querySelectorAll("h1, h2, h3, a, p").forEach(element => {
            element.style.color = "#fff";
        });
    } else {
        main.style.background = "var(--paragraph-background-color)";
        main.style.color = "var(--paragraph-color-on-white)";
        modeButton.textContent = "🌙";
        
        main.querySelectorAll("h1, h2, h3, a, p").forEach(element => {
            const tagName = element.tagName.toLowerCase();
            element.style.color = originalColors[tagName];
        });
    }
});


});