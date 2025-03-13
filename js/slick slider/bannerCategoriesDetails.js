// StartSlider 7
$(document).ready(function () {
  $(".sliderCategoriesDetails1").slick({
    dots: false,
    appendDots: $(".dotsCategoriesDetails1"),
    customPaging: function (slider, i) {
      return "<div></div>";
    },
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".sliderCategoriesDetails1").on(
    "afterChange",
    function (event, slick, currentSlide) {
      $(".dotsCategoriesDetails1 div").removeClass("active");
      $(".dotsCategoriesDetails1 div").eq(currentSlide).addClass("active");
    }
  );

  $(".dotsCategoriesDetails1 div").first().addClass("active");
});
//  End Slider 7
// StartSlider 8
$(document).ready(function () {
  $(".sliderCategoriesDetails2").slick({
    dots: false,
    appendDots: $(".dotsCategoriesDetails2"),
    customPaging: function (slider, i) {
      return "<div></div>";
    },
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".sliderCategoriesDetails2").on(
    "afterChange",
    function (event, slick, currentSlide) {
      $(".dotsCategoriesDetails2 div").removeClass("active");
      $(".dotsCategoriesDetails2 div").eq(currentSlide).addClass("active");
    }
  );

  $(".dotsCategoriesDetails2 div").first().addClass("active");
});
//  End Slider 8
// StartSlider 9
$(document).ready(function () {
  $(".sliderCategoriesDetails3").slick({
    dots: false,
    appendDots: $(".dotsCategoriesDetails3"),
    customPaging: function (slider, i) {
      return "<div></div>";
    },
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".sliderCategoriesDetails3").on(
    "afterChange",
    function (event, slick, currentSlide) {
      $(".dotsCategoriesDetails3 div").removeClass("active");
      $(".dotsCategoriesDetails3 div").eq(currentSlide).addClass("active");
    }
  );

  $(".dotsCategoriesDetails3 div").first().addClass("active");
});
//  End Slider 9
