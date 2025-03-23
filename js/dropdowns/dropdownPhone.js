$(document).ready(function () {
  $(".dropdown-phone-btn").click(function (event) {
    event.stopPropagation();
    $(".dropdown-phone-list").toggle();
  });

  $(".dropdown-phone-list p").click(function (event) {
    event.stopPropagation();
    var selectedCode = $(this).data("code");
    var selectedFlag = $(this).find("img").attr("src");

    $(".initl-phone span").text(selectedCode);
    $(".initl-phone img").attr("src", selectedFlag);

    $(".dropdown-phone-list").hide();
  });

  $(document).click(function () {
    $(".dropdown-phone-list").hide();
  });
});
