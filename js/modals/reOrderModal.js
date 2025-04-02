$(document).ready(function () {
  $("#reOrder").click(function () {
    $(".overlay, .returnOrder").fadeIn();
    $("body").css("overflow-y", "hidden");
  });

  $(".close-btn, .overlay, #cancel").click(function () {
    $(".overlay, .returnOrder").fadeOut();
    $("body").css("overflow-y", "auto");
  });
});
