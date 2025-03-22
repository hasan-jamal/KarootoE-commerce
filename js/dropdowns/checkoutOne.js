$(document).ready(function () {
  $(".changeBtn").click(function (event) {
    event.stopPropagation();
    $(".checkout .listChangeLocation").css("display", "flex");
  });
  $(".checkout  .listChangeLocation .itemLocation").click(function () {
    var selectedLocation = $(this).find("span").text();
    var selectedCompany = $(this).find("p").text();

    $(".changeLocation .itemLocation p").text(selectedCompany);
    $(".changeLocation .itemLocation span").text(selectedLocation);

    $(".checkout .listChangeLocation").hide();
  });

  $(document).click(function (event) {
    if (!$(event.target).closest(".listChangeLocation, .changeBtn").length) {
      $(".checkout .listChangeLocation").hide();
    }
  });

  $(".checkout .listChangeLocation").click(function (event) {
    event.stopPropagation();
  });
});
//////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const datePicker = document.querySelector(".date-picker");
  const selectedDate = document.querySelector(".selected-date");
  const fxBoxInput = document.querySelector(".fxBox-input");

  fxBoxInput.addEventListener("click", function () {
    datePicker.showPicker();
  });

  datePicker.addEventListener("change", function () {
    selectedDate.textContent = this.value;
    selectedDate.style.color = "#000";
  });
});
//////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const timePicker1 = document.querySelector(".time-picker1");
  const selectedTime1 = document.querySelector(".selected-time1");
  const fxBoxTime1 = document.querySelector(".fxBox-time1");

  fxBoxTime1.addEventListener("click", function () {
    timePicker1.showPicker();
  });

  timePicker1.addEventListener("change", function () {
    selectedTime1.textContent = this.value;
    selectedTime1.style.color = "#000";
  });
});
//////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const timePicker2 = document.querySelector(".time-picker2");
  const selectedTime2 = document.querySelector(".selected-time2");
  const fxBoxTime2 = document.querySelector(".fxBox-time2");

  fxBoxTime2.addEventListener("click", function () {
    timePicker2.showPicker();
  });

  timePicker2.addEventListener("change", function () {
    selectedTime2.textContent = this.value;
    selectedTime2.style.color = "#000";
  });
});
