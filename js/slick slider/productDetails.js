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
// Plus Minus Weight
$(document).ready(function () {
  $(".fxAmount-product").each(function () {
    let container = $(this);
    let minusBtn = container.find("button:first-child");
    let plusBtn = container.find("button:last-child");
    let weightText = container.find("p span");

    minusBtn.click(function () {
      let currentWeight = parseInt(weightText.text());
      if (currentWeight > 1) {
        weightText.text(currentWeight - 1);
      }
    });

    plusBtn.click(function () {
      let currentWeight = parseInt(weightText.text());
      weightText.text(currentWeight + 1);
    });
  });
});
