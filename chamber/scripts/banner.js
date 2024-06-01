// ********* Banner */
function initBanner() {
    var banner = document.getElementById("banner");
    var closeBannerBtn = document.getElementById("closeBanner");
    var today = new Date();
    var dayOfWeek = today.getDay();
    var isBannerVisible = dayOfWeek >= 1 && dayOfWeek <= 3;
    var isBannerClosed = sessionStorage.getItem("bannerClosed") === "true";
    banner.classList.toggle("banner", isBannerVisible && !isBannerClosed);
    banner.classList.toggle("banner-hide", !isBannerVisible || isBannerClosed);
    closeBannerBtn.addEventListener("click", function () {
        banner.classList.add("banner-hide");
        sessionStorage.setItem("bannerClosed", "true");
    });
}
document.addEventListener("DOMContentLoaded", initBanner);