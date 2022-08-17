const hamburgerBtn = document.getElementById("hamburger-btn");
const nav = document.getElementById("main-navigation");
const barsIcon = document.getElementById("bars-icon");
let mediaQuery = window.matchMedia("(max-width:56.25em)");
hamburgerBtn.addEventListener("click", openMenu);
const checkQueries = () => {
  if (mediaQuery.matches) {
    nav.classList.add("hidden");
    nav.classList.remove("nav-animate");
    hamburgerBtn.classList.remove("hidden");
  } else {
    nav.classList.remove("hidden");
    hamburgerBtn.classList.add("hidden");
  }
};
checkQueries();
mediaQuery.addEventListener("change", checkQueries);

function openMenu() {
  nav.classList.toggle("hidden");
}
