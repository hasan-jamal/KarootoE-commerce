function toggleSidenav() {
  document.body.classList.toggle("sidenav-active");
}
function closeSidenav() {
  document.body.classList.remove();
}
// const interval = setInterval(toggleSidenav, 1500);
document.addEventListener("mousemove", removeInterval);
document.addEventListener("click", removeInterval);

function removeInterval() {
  document.removeEventListener("mousemove", removeInterval);
  document.removeEventListener("click", removeInterval);
}
// //////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
  // دالة عامة لإدارة فتح وإغلاق القوائم
  function toggleMenu(
    buttonSelector,
    menuSelector,
    closeOnClickOutside = true
  ) {
    $(buttonSelector).on("click", function (event) {
      event.stopPropagation();
      $(menuSelector).toggleClass("show");

      // إغلاق جميع القوائم الأخرى
      $(".listBrowse, .listCategories, .listLocations")
        .not(menuSelector)
        .removeClass("show");
    });

    if (closeOnClickOutside) {
      $(document).on("click", function (event) {
        if (
          !$(event.target).closest(buttonSelector).length &&
          !$(event.target).closest(menuSelector).length
        ) {
          $(menuSelector).removeClass("show");
        }
      });
    }
  }

  // دالة عامة لتحديد العنصر المختار في القائمة
  function handleMenuItemSelection(
    menuItemSelector,
    buttonSelector,
    textSelector,
    animationClass
  ) {
    $(menuItemSelector).on("click", function () {
      let selectedText = $(this).find(textSelector).text();
      $(buttonSelector)
        .find(textSelector)
        .text(selectedText)
        .addClass(animationClass);

      setTimeout(() => {
        $(buttonSelector).find(textSelector).removeClass(animationClass);
      }, 300);

      $(menuItemSelector).closest(".list").removeClass("show");
    });
  }

  // تطبيق الدوال على القوائم المختلفة
  toggleMenu("#btnBrowse", ".listBrowse");
  toggleMenu(".btnCategories", ".listCategories");
  toggleMenu(".btnLocation", ".listLocations");

  handleMenuItemSelection(
    ".itemCategory",
    ".btnCategories",
    "p",
    "selected-animation"
  );
  handleMenuItemSelection(
    ".itemLocation",
    ".btnLocation",
    "p",
    "selected-animation"
  );
});

///////////////////////////////////////////////
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
