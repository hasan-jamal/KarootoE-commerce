document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    document.querySelectorAll("label").forEach((label) => {
      label.classList.remove("checked");
    });
    const label = this.closest("label");
    label.classList.add("checked");
  });
});
