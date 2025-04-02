$(document).ready(function () {
  $(".selectImage").click(function () {
    $("#fileInput").click();
  });

  $("#fileInput").change(function (event) {
    let file = event.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = function (e) {
        $(".profileImage").attr("src", e.target.result);
      };
      reader.readAsDataURL(file);
    }
  });
});
