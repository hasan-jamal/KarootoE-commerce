$(document).ready(function () {
  $(".btnSort").click(function (event) {
    event.stopPropagation();

    $(".listSorting")
      .not($(this).next(".listSorting"))
      .slideUp(300, function () {
        $(this).css("display", ""); // Reset display property
      });

    $(this)
      .next(".listSorting")
      .stop()
      .slideToggle(300, function () {
        if ($(this).is(":visible")) {
          $(this).css("display", "flex"); // Set to flex when open
        }
      });
  });

  $(".listSorting button").click(function () {
    var selectedText = $(this).text();
    $(this).closest(".divSort").find(".btnSort span").text(selectedText);
    $(".listSorting").slideUp(300, function () {
      $(this).css("display", ""); // Reset display property
    });
  });

  $(document).click(function () {
    $(".listSorting").slideUp(300, function () {
      $(this).css("display", ""); // Reset display property
    });
  });

  $(".listSorting").click(function (event) {
    event.stopPropagation();
  });
});
