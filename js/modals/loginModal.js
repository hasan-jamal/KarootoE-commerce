$(document).ready(function () {
  $(".addAddress,.signIn").click(function () {
    $(".overlay, .loginModal").fadeIn();
    $("body").css("overflow-y", "hidden");
  });

  $(".overlay").click(function () {
    $(".overlay, .loginModal").fadeOut();
    $("body").css("overflow-y", "auto");
  });
});
