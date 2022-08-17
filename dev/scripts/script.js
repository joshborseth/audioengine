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
  // autoplay: true,
  // autoplaySpeed: 5000,
});
$(".this-is-ae").on("click", (e) => {
  console.log(e.target);

  if (e.target !== $("#video-el")[0]) {
    $("#video-el")[0].pause();
    $(".video").toggleClass("video-hide");
  }
});
$("#main-navigation").animate({ height: "toggle" }, 0);
const buttons = [
  '<i class="fa-solid fa-x"></i>',
  '<i class="fa-solid fa-bars"></i>',
];
let i = 0;
$("#hamburger-btn").on("click", () => {
  $("#hamburger-btn")[0].children[0].remove();
  $("#hamburger-btn").append(buttons[i]);
  $("#main-navigation").animate({ height: "toggle" });
  i++;
  if (i === 2) {
    i = 0;
  }
});

$("#main-navigation");
let mediaQuery = window.matchMedia("(min-width:45em)");
const checkQueries = () => {
  if (mediaQuery) {
    console.log("matches");
  } else {
    console.log("doesnt match");
  }
};
checkQueries();
mediaQuery.addEventListener("change", checkQueries);
