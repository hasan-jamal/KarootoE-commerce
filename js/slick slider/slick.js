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
  $(".SliderBanner").slick({
    dots: false,
    appendDots: $(".dots-SliderBanner"),
    customPaging: function (slider, i) {
      return "<div></div>";
    },
    arrows: false, // You can set this to true if you want navigation arrows
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Optional: Enable autoplay
    autoplaySpeed: 2000, // Optional: Set autoplay speed in milliseconds
  });

  // Sync the active dot with the current slide
  $(".SliderBanner").on("afterChange", function (event, slick, currentSlide) {
    $(".dots-SliderBanner div").removeClass("active");
    $(".dots-SliderBanner div").eq(currentSlide).addClass("active");
  });

  // Initialize the first dot as active
  $(".dots-SliderBanner div").first().addClass("active");
});
//  End Slider 2
