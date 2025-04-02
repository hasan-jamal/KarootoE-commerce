$(document).ready(function () {
  $(".boxInput").click(function () {
    let listBox = $(this).siblings(".list-boxInput");
    if (listBox.is(":visible")) {
      listBox.fadeOut(200, function () {
        $(this).css("display", "none");
      });
    } else {
      $(".list-boxInput").fadeOut(200, function () {
        $(this).css("display", "none");
      }); // Close other lists
      listBox.css("display", "flex").hide().fadeIn(200);
    }
  });

  $(".list-boxInput span").click(function () {
    let selectedText = $(this).text();
    $(this).closest(".DivList").find("input").val(selectedText);
    $(this)
      .parent()
      .fadeOut(200, function () {
        $(this).css("display", "none");
      });
  });

  $(document).click(function (e) {
    if (!$(e.target).closest(".DivList").length) {
      $(".list-boxInput").fadeOut(200, function () {
        $(this).css("display", "none");
      });
    }
  });
});
