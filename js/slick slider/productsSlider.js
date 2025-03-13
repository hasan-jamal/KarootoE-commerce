$(document).ready(function () {
  $(".slickProducts").slick({
    dots: true,
    appendDots: $(".dots-slickProducts"),
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
    $(".dots-slickProducts .dot").removeClass("active");
    $(".dots-slickProducts .dot").eq(currentSlide).addClass("active");
  }
  $(".slickProducts").on("afterChange", function (event, slick, currentSlide) {
    updateActiveDot(currentSlide);
  });

  updateActiveDot(0);

  $(".dots-slickProducts .dot").on("click", function () {
    var slideIndex = $(this).index();
    $(".slickProducts").slick("slickGoTo", slideIndex);
  });
});
//  End Slider 3
