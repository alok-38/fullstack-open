// Start with an empty array for fruits
let fruits = [];

// Reference to the DOM elements
let fruitsInput = document.querySelector('input');
const addFruitsBtn = document.querySelector('button');
let fruitList = document.querySelector('ul');

// function to render fruits
const renderFruits = () => {
    fruits.forEach(fruit => {
        let liEl = document.createElement('li');
        liEl.textContent = fruit;
        fruitList.appendChild(liEl);
    });
}



// Event listener for the "Add Fruit" button
addFruitsBtn.addEventListener('click', () => {
    // Get the input value
    let newFruit = fruitsInput.value.trim();
    // If the input is not empty, add it to the array and update the list
    if (newFruit !== '') {
        fruits.push(newFruit);
        renderFruits();
        // clear the input field
        fruitsInput.value = '';
    } else {
        alert('Enter a valid fruit!');
    }
});

// Initially, the list is empty, so just display the empty state
renderFruits();