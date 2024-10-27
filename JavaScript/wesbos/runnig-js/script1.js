const paraEl = document.querySelector("p");
const originalText = paraEl.textContent;
const newText = "JavaScript was designed by Branden Eich at Netscape.";

document.addEventListener("DOMContentLoaded", () => {
  paraEl.addEventListener("click", () => {
    if (paraEl.textContent === originalText) {
      paraEl.textContent = newText;
    } else {
      paraEl.textContent = originalText;
    }
  });
});
