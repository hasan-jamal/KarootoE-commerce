$(document).ready(function () {
  $("#deleteModalBtn").click(function () {
    $(".overlay, .deleteModal").fadeIn();
    $("body").css("overflow-y", "hidden");
  });

  $(".overlay,#cancelDeleteModal").click(function () {
    $(".overlay, .deleteModal").fadeOut();
    $("body").css("overflow-y", "auto");
  });
});
