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
let isOpen = false;
$("#hamburger-btn").on("click", () => {
  isOpen = !isOpen;
  $("#hamburger-btn i").remove();
  $("#main-navigation").animate({ height: "toggle" });
  if (isOpen) {
    let button = '<i class="fa-solid fa-x"></i>';
    $("#hamburger-btn").append(button);
  } else {
    let button = '<i class="fa-solid fa-bars"></i>';
    $("#hamburger-btn").append(button);
  }
});

$("#main-navigation");
let mediaQuery = window.matchMedia("(min-width:63.25em)");
const checkQueries = () => {
  if (mediaQuery.matches) {
    $("#main-navigation").show();
    $("#hamburger-btn").hide();
  } else {
    $("#hamburger-btn").show();
    $("#main-navigation").hide();
    $("#hamburger-btn i").removeClass("fa-x");
    $("#hamburger-btn i").addClass("fa-bars");
    isOpen = false;
  }
};
checkQueries();
mediaQuery.addEventListener("change", checkQueries);
