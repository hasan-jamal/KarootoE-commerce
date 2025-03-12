$(document).ready(function () {
  $("#lines").click(function () {
    if ($("#filter").is(":visible")) {
      $("#filter").animate(
        {
          width: "0",
          height: "0",
          opacity: 0,
        },
        100,
        function () {
          $(this).hide();
        }
      );
    } else {
      $("#filter")
        .css({
          display: "block",
          width: "0",
          height: "0",
          opacity: 0,
        })
        .animate(
          {
            width: "100%",
            height: "100%",
            opacity: 1,
          },
          100
        );
    }
  });

  $(".btnCloseFilter").click(function () {
    $("#filter").animate(
      {
        width: "0",
        height: "0",
        opacity: 0,
      },
      100,
      function () {
        $(this).hide();
      }
    );
  });
});
///////////////////////////////////////////
$(document).ready(function () {
  $(".btnSort").click(function (event) {
    event.stopPropagation();

    $(".listSorting").not($(this).next(".listSorting")).slideUp(300);

    $(this).next(".listSorting").stop().slideToggle(300);
  });
  $(".listSorting button").click(function () {
    var selectedText = $(this).text();
    $(this).closest(".divSort").find(".btnSort span").text(selectedText);
    $(".listSorting").slideUp(300);
  });
  $(document).click(function () {
    $(".listSorting").slideUp(300);
  });
  $(".listSorting").click(function (event) {
    event.stopPropagation();
  });
});
/////////////////////////////////////
$(document).ready(function () {
  $(".featureBox img").click(function () {
    $(this).closest(".featureBox").remove();
  });

  $(".clearAll").click(function (e) {
    e.preventDefault();
    $(".featureBox").remove();
    $(this).remove();
  });
});
