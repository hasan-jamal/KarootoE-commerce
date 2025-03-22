$(document).ready(function () {
  $(".radio-item").click(function (event) {
    if ($(this).hasClass("selected")) {
      return;
    }

    $(".radio-item").removeClass("selected").css("border-color", "transparent");
    $(this).find("input[type='radio']").prop("checked", true);
    $(this).addClass("selected").animate({ borderColor: "#007bff" }, 300);

    $(".radio-item form")
      .stop(true, true)
      .fadeOut(200, function () {
        $(this).css("display", "none");
      });

    if ($(this).find("form").length) {
      $(this)
        .find("form")
        .css("display", "flex")
        .hide()
        .stop(true, true)
        .fadeIn(300)
        .slideDown(400);
    }
  });
});
