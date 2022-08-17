// Functions for sliders
$(".slider").slick({
  dots: true,
  infinite: true,
  centerPadding: "100px",
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

function categorySlider() {
  if (window.innerWidth >= 427) {
    $(".category-carousel").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 2,
      prevArrow:
        '<button type="button" class="slick-next image-button left"><i class="fa-solid fa-angle-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-prev image-button right"><i class="fa-solid fa-angle-right"></i></button>',
      responsive: [
        {
          breakpoint: 1012,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 427,
          settings: "unslick",
        },
      ],
    });
    $(".news").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 2,
      prevArrow:
        '<button type="button" class="slick-next image-button left"><i class="fa-solid fa-angle-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-prev image-button right"><i class="fa-solid fa-angle-right"></i></button>',
      responsive: [
        {
          breakpoint: 1012,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 427,
          settings: "unslick",
        },
      ],
    });
  }
}
categorySlider();
let categoryQuery = window.matchMedia("(min-width:427px)");
categoryQuery.addEventListener("change", categorySlider);
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
