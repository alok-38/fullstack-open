const toggleButton = document.querySelector('#toggleButton');
const contentElement = document.querySelector('#contentToggle');

toggleButton.addEventListener('click', function (event) {
    if (contentElement.style.display === "block") {
        contentElement.style.display = "none";
    } else {
        contentElement.style.display = "block";
    }
})