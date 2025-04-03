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
        breakpoint: 2000,
        settings: {
          slidesToShow: 8.3,
          centerMode: true,
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 7.3,
          centerMode: true,
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 6.8,
          centerMode: true,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 6.3,
          centerMode: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5.6,
          centerMode: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 5.3,
          centerMode: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4.3,
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
          slidesToShow: 3.2,
          centerMode: false,
        },
      },
    ],
  });
});
//  End Slider 1
// StartSlider 2
$(document).ready(function () {
  $(".SliderBanner").slick({
    dots: false,
    appendDots: $(".dots-SliderBanner"),
    customPaging: function (slider, i) {
      return "<div></div>";
    },
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  });

  $(".SliderBanner").on("afterChange", function (event, slick, currentSlide) {
    $(".dots-SliderBanner div").removeClass("active");
    $(".dots-SliderBanner div").eq(currentSlide).addClass("active");
  });

  $(".dots-SliderBanner div").first().addClass("active");
});
//  End Slider 2
// Start slider 3
$(document).ready(function () {
  $(".slickProducts1").slick({
    dots: true,
    appendDots: $(".dots-slickProducts1"),
    prevArrow: $(".leftProduct"),
    nextArrow: $(".rightProduct"),
    customPaging: function (slider, i) {
      return '<div class="dot"></div>';
    },
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });

  function updateActiveDot(currentSlide) {
    $(".dots-slickProducts1 .dot").removeClass("active");
    $(".dots-slickProducts1 .dot").eq(currentSlide).addClass("active");
  }
  $(".slickProducts1").on("afterChange", function (event, slick, currentSlide) {
    updateActiveDot(currentSlide);
  });

  updateActiveDot(0);

  $(".dots-slickProducts1 .dot").on("click", function () {
    var slideIndex = $(this).index();
    $(".slickProducts1").slick("slickGoTo", slideIndex);
  });
});
//  End Slider 3
// Start slider 4
$(document).ready(function () {
  $(".slickProducts2").slick({
    dots: true,
    appendDots: $(".dots-slickProducts2"),
    prevArrow: $(".leftProduct1"),
    nextArrow: $(".rightProduct1"),
    customPaging: function (slider, i) {
      return '<div class="dot"></div>';
    },
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });

  function updateActiveDot(currentSlide) {
    $(".dots-slickProducts2 .dot").removeClass("active");
    $(".dots-slickProducts2 .dot").eq(currentSlide).addClass("active");
  }
  $(".slickProducts2").on("afterChange", function (event, slick, currentSlide) {
    updateActiveDot(currentSlide);
  });

  updateActiveDot(0);

  $(".dots-slickProducts2 .dot").on("click", function () {
    var slideIndex = $(this).index();
    $(".slickProducts2").slick("slickGoTo", slideIndex);
  });
});
//  End Slider 4
// Start slider 5
$(document).ready(function () {
  $(".slickProducts3").slick({
    dots: true,
    appendDots: $(".dots-slickProducts3"),
    prevArrow: $(".leftProduct2"),
    nextArrow: $(".rightProduct2"),
    customPaging: function (slider, i) {
      return '<div class="dot"></div>';
    },
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });

  function updateActiveDot(currentSlide) {
    $(".dots-slickProducts3 .dot").removeClass("active");
    $(".dots-slickProducts3 .dot").eq(currentSlide).addClass("active");
  }
  $(".slickProducts3").on("afterChange", function (event, slick, currentSlide) {
    updateActiveDot(currentSlide);
  });

  updateActiveDot(0);

  $(".dots-slickProducts3 .dot").on("click", function () {
    var slideIndex = $(this).index();
    $(".slickProducts3").slick("slickGoTo", slideIndex);
  });
});
