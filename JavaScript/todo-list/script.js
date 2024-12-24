const formEl = document.querySelector('form');
const inputEl = document.querySelector('input');
const listEl = document.getElementById('list');

formEl.addEventListener('submit', event => {
    event.preventDefault();
    // Get the value from the input field
    const userInput = inputEl.value.trim();

    if (userInput) {
        const newItemEl = document.createElement('li');
        newItemEl.textContent = userInput;
        listEl.appendChild(newItemEl);
        listEl.style.marginBottom = "4px";
        inputEl.value = "";
    } else {
        alert("Please enter something!");
    }
});
