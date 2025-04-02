$(document).ready(function () {
  $("#btnTabs").click(function () {
    if ($("#tabsListSide").is(":visible")) {
      $("#tabsListSide").animate(
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
      $("#tabsListSide")
        .css({
          display: "flex", // Change to flex instead of block
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

  $(".btnClose").click(function () {
    $("#tabsListSide").animate(
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
