$(document).ready(function () {
  $("#signIn").click(function () {
    $(".overlay, .otpModal").fadeIn();
    $("body").css("overflow-y", "hidden");
    $(".loginModal").css("display", "none");
  });

  $(".overlay").click(function () {
    $(".overlay, .otpModal").fadeOut();
    $("body").css("overflow-y", "auto");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".otp-input");

  inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
      if (e.target.value && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && !e.target.value && index > 0) {
        inputs[index - 1].focus();
      }
    });
  });
});
