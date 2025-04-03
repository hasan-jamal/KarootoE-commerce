$(document).ready(function () {
  $("#btnFilterList").click(function () {
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
