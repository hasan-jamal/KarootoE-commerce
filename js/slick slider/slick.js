// StartSlider1

$(document).ready(function () {
  $(".sliderCategories").slick({
    centerMode: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 8.3,
          centerMode: true,
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 8.3,
          centerMode: true,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 7.3,
          centerMode: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 7.6,
          centerMode: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 7.3,
          centerMode: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 5.3,
          centerMode: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4.3,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3.3,
          centerMode: false,
        },
      },
    ],
  });
});
//  End Slider 1
// StartSlider 2

$(document).ready(function () {
  $(".sliderArticles").slick({
    prevArrow: $(".arrow-sliderLeft"),
    nextArrow: $(".arrow-sliderRight"),
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    responsive: [
      {
        breakpoint: 7000,
        settings: {
          slidesToShow: 4,
          centerMode: true,
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
          centerMode: true,
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3.2,
          centerMode: true,
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });
});
//  End Slider 2
// StartSlider 3
$(document).ready(function () {
  $(".slider-logos").slick({
    prevArrow: $(".arrow-sliderLeft"),
    nextArrow: $(".arrow-sliderRight"),
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    responsive: [
      {
        breakpoint: 7000,
        settings: {
          slidesToShow: 7,
          centerMode: true,
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 6,
          centerMode: true,
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 5.2,
          centerMode: true,
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 5,
          centerMode: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
    ],
  });
});
//  End Slider 3

//  End Slider 5
$(document).ready(function () {
  $(".sliderEnergy").slick({
    prevArrow: $(".yellow-ArrowLeft"),
    nextArrow: $(".yellow-ArrowRight"),
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplaySpeed: 1500,
    dots: false,
  });
});
//  End Slider 5
