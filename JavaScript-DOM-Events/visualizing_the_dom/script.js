const singleElement = document.querySelector('.example-class');
const multipleElements = document.querySelectorAll('.highlighted');
console.log(singleElement, multipleElements);
singleElement.textContent = "New content for the element";
multipleElements.forEach((element) => {
    element.innerHTML = "Updated HTML content";
    element.style.marginBottom = "1rem";
});
singleElement.style.color = "rebeccapurple";
singleElement.style.fontSize = "1.5em";
singleElement.style.marginBottom = "1rem";

//  Creating and Adding New Elements
let newElement = document.createElement("div");
let paragraph = document.createElement("p");
paragraph.textContent = "A new paragraph element within a div";
newElement.appendChild(paragraph);
document.body.appendChild(newElement);

//  Working with Events and Event Listeners

