$(document).ready(function () {
  $(".hamburger").click(function () {
    $(".coverNav").fadeIn(300);
    $(".navbarPart4").slideDown(300);
    $(".hamburger").fadeOut(300);
    $("body").css("overflow", "hidden");
  });

  $(".coverNav").click(function () {
    $(".hamburger").fadeIn(300);
    $(".coverNav").fadeOut(300);
    $(".navbarPart4").slideUp(300);
    $("body").css("overflow", "auto");
  });

  $(".close-nav").click(function (event) {
    event.stopPropagation();
    $(".hamburger").fadeIn(300);
    $(".coverNav").fadeOut(300);
    $(".navbarPart4").slideUp(300);
    $("body").css("overflow", "auto");
  });
});
// //////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
  // Function to close all open dropdowns
  function closeAllDropdowns() {
    $(".listBrowse, .listCategories, .listLocations").removeClass("show");
    $(".listBrowse")
      .stop()
      .animate({ opacity: 0, top: "-10px" }, 100, function () {
        $(this).slideUp(100);
      });
  }

  // Browse Button
  $("#btnBrowse").on("click", function (event) {
    event.stopPropagation();
    let listBrowse = $(".listBrowse");

    if (listBrowse.hasClass("show")) {
      listBrowse.stop().animate({ opacity: 0, top: "-10px" }, 100, function () {
        listBrowse.slideUp(100).removeClass("show");
      });
    } else {
      closeAllDropdowns();
      listBrowse
        .css({ display: "flex", top: "-10px", opacity: 0 })
        .stop()
        .slideDown(100)
        .animate({ opacity: 1, top: "50px" }, 100)
        .addClass("show");
    }
  });

  // Categories Button
  $(".btnCategories").click(function (event) {
    event.stopPropagation();
    closeAllDropdowns();
    $(".listCategories").toggleClass("show");
  });

  $(".itemCategory").click(function () {
    let selectedText = $(this).find("p").text();
    $(".btnCategories span").text(selectedText).addClass("selected-animation");

    setTimeout(() => {
      $(".btnCategories span").removeClass("selected-animation");
    }, 300);

    $(".listCategories").removeClass("show");
  });

  // Location Button
  $(".btnLocation").click(function (event) {
    event.stopPropagation();
    closeAllDropdowns();
    $(".listLocations").toggleClass("show");
  });

  $(".itemLocation").click(function () {
    let selectedText1 = $(this).find("p").text();
    let selectedText2 = $(this).find("span").text();
    $(".btnLocation span").text(selectedText1).addClass("selected-animation");
    $(".btnLocation p").text(selectedText2).addClass("selected-animation");

    setTimeout(() => {
      $(".btnLocation span").removeClass("selected-animation");
    }, 300);
    $(".listLocations").removeClass("show");
  });

  // Click outside to close all dropdowns
  $(document).click(function (event) {
    if (
      !$(event.target).closest(".divBrowse, .divCategories, .divLocation")
        .length
    ) {
      closeAllDropdowns();
    }
  });

  // Hover functionality for links
  document.querySelectorAll(".divLink").forEach((boxLink) => {
    const link = boxLink.querySelector(".linkBtn");
    const targetId = link.getAttribute("data-target");
    const list = document.getElementById(targetId);
    const divCoverBack = document.getElementById("coverBack");

    if (list) {
      const showList = () => list.classList.add("active");
      const showCoverBack = () => divCoverBack.classList.add("coverBack");

      const hideList = () => list.classList.remove("active");
      const hideCoverBack = () => divCoverBack.classList.remove("coverBack");
      boxLink.addEventListener("mouseenter", showList);
      boxLink.addEventListener("mouseenter", showCoverBack);

      boxLink.addEventListener("mouseleave", (event) => {
        hideList();
        hideCoverBack();
      });
    }
  });
});
/////////////////////////////////////////
$(document).ready(function () {
  $(".nav-toggle").click(function () {
    $(".listNav").not($(this).next(".listNav")).removeClass("open");
    $(".arrowNav").not($(this).find(".arrowNav")).removeClass("rotate");

    var $listNav = $(this).next(".listNav");
    var $arrowNav = $(this).find(".arrowNav");

    $listNav.toggleClass("open");

    $arrowNav.toggleClass("rotate");
  });
});
