// Write your JavaScript here...
$(".slider").slick({
  dots: true,
  infinite: true,
  speed: 600,
  fade: true,
  dotsClass: "slick-dots",
  prevArrow:
    '<button type="button" class="slick-next image-button left"><i class="fa-solid fa-angle-left"></i></button>',
  nextArrow:
    '<button type="button" class="slick-prev image-button right"><i class="fa-solid fa-angle-right"></i></button>',
  autoplay: true,
  autoplaySpeed: 5000,
});

//menu stuff
const hb = document.getElementById("hamburger-btn");
const nav = document.getElementById("main-navigation");
let mediaQuery = window.matchMedia("(max-width:56.25em)");

const checkQueries = () => {
  if (mediaQuery.matches) {
    nav.classList.add("hidden");
    nav.classList.remove("nav-animate");
    hb.classList.remove("hidden");
  } else {
    nav.classList.remove("hidden");
    hb.classList.add("hidden");
  }
};
checkQueries();
mediaQuery.addEventListener("change", checkQueries);

hb.addEventListener("click", (e) => {
  nav.classList.toggle("hidden");
});
//menu stuff end
