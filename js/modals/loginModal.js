$(document).ready(function () {
  $(".addAddress").click(function () {
    $(".overlay, .loginModal").fadeIn();
    $("body").css("overflow", "hidden");
  });

  $(".overlay").click(function () {
    $(".overlay, .loginModal").fadeOut();
    $("body").css("overflow", "auto");
  });
});
