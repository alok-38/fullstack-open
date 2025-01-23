const formEl = document.querySelector('form');
const inputEl = document.querySelector('#choose');
const buttonEl = document.querySelector('button');

formEl.addEventListener('submit', function (event) {
    // Check if the input is valid (this includes checking the 'required' attribute)
    if (!inputEl.checkValidity()) {
        // Prevent form submission if the field is invalid
        event.preventDefault();
        inputEl.style.border = "2px solid red"; // Show the error state (red border)
    } else {
        inputEl.style.border = ""; // Reset the border if it's valid
    }
});
