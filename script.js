const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");
const cruiseHeading = document.querySelector(".cruise-heading");
const cruiseCardDisplay = document.querySelector(".cruise-cards");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    showcase.classList.toggle("active");
});

function cruiseExplore() {
    cruiseHeading.style.display = "block";
    cruiseCardDisplay.style.display = "flex";
}
