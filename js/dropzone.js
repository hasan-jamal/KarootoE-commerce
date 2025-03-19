const dropzone = document.getElementById("imageDropzone");
const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");

// Open file selector on click
dropzone.addEventListener("click", () => fileInput.click());

// Handle file selection
fileInput.addEventListener("change", (event) =>
  handleFiles(event.target.files)
);

// Drag and drop functionality
dropzone.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropzone.classList.add("dragover");
});

dropzone.addEventListener("dragleave", () =>
  dropzone.classList.remove("dragover")
);

dropzone.addEventListener("drop", (event) => {
  event.preventDefault();
  dropzone.classList.remove("dragover");
  handleFiles(event.dataTransfer.files);
});

// Function to handle files and display previews with delete buttons
function handleFiles(files) {
  [...files].forEach((file) => {
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const container = document.createElement("div");
        container.classList.add("image-container");

        const img = document.createElement("img");
        img.src = e.target.result;
        img.classList.add("preview-img");

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = () => container.remove(); // Remove image on click

        container.appendChild(img);
        container.appendChild(deleteBtn);
        preview.appendChild(container);
      };
      reader.readAsDataURL(file);
    }
  });
}
