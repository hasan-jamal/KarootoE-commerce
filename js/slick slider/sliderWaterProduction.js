// StartSlider 4
$(document).ready(function () {
  $(".sliderWaterProduction").slick({
    prevArrow: $(".WaterProductionRightLeft"),
    nextArrow: $(".WaterProductionRight"),
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: false,
    responsive: [
      {
        breakpoint: 7000,
        settings: {
          slidesToShow: 4,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3.2,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  });
});
//  End Slider 4
