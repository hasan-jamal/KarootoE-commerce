// Plus Minus Weight
$(document).ready(function () {
  $(".fxAmount-product").each(function () {
    let container = $(this);
    let minusBtn = container.find("button:first-child");
    let plusBtn = container.find("button:last-child");
    let weightText = container.find("p span");

    minusBtn.click(function () {
      let currentWeight = parseInt(weightText.text());
      if (currentWeight > 1) {
        weightText.text(currentWeight - 1);
      }
    });

    plusBtn.click(function () {
      let currentWeight = parseInt(weightText.text());
      weightText.text(currentWeight + 1);
    });
  });
});
