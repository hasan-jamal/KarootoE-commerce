$(document).ready(function () {
  $(".imagesProducts").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $(".arrows-sliderProducts img:first-child"),
    nextArrow: $(".arrows-sliderProducts img:last-child"),
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "0",
  });

  $(".divImage").on("click", function () {
    let newSrc = $(this).find("img").attr("src");
    $(".productImage").attr("src", newSrc);
    $(".divImage").removeClass("active");
    $(this).addClass("active");
  });

  $(".imagesProducts").on("afterChange", function (event, slick, currentSlide) {
    let activeSlide = $(slick.$slides[currentSlide]);
    let newSrc = activeSlide.find("img").attr("src");
    $(".productImage").attr("src", newSrc);
    $(".divImage").removeClass("active");
    $(slick.$slides[currentSlide]).addClass("active");
  });

  $(".imagesProducts").on("init", function (event, slick) {
    let initialSlide = $(slick.$slides[slick.currentSlide]);
    let initialSrc = initialSlide.find("img").attr("src");
    $(".productImage").attr("src", initialSrc);
    $(".divImage").removeClass("active");
    $(slick.$slides[slick.currentSlide]).addClass("active");
  });
  $(".slick -current.slick-active").addClass("active");
  $(".imagesProducts").slick("slickInit");
});
////////////////////////////////////////////////////////////////////////
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
