$(document).ready(function () {
  $(".addAddress").click(function () {
    $(".overlay, .authModal").fadeIn();
    $("body").css("overflow", "hidden");
  });

  $(".overlay").click(function () {
    $(".overlay, .authModal").fadeOut();
    $("body").css("overflow", "auto");
  });
});
