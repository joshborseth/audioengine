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
