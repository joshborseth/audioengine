// Init Mobile Menu as Closed
$("#main-navigation").animate({ height: "toggle" }, 0);

// Hero Slider Settings
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
  autoplay: true,
  autoplaySpeed: 5000,
});
// Category Slider & News Slider
function smallSliders() {
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
smallSliders();
let mediaQuery427 = window.matchMedia("(min-width:427px)");
mediaQuery427.addEventListener("change", smallSliders);
// End Sliders

// Video Popup
$(".this-is-ae").on("click", (e) => {
  e.preventDefault();
  if (e.target !== $("#video-el")[0]) {
    $("#video-el")[0].pause();
    $(".video").toggleClass("video-hide");
  }
});

// Hamburger Menu
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
let mediaQuery63 = window.matchMedia("(min-width:63.25em)");
const checkQueries = () => {
  if (mediaQuery63.matches) {
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
mediaQuery63.addEventListener("change", checkQueries);
