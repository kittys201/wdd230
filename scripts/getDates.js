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
});