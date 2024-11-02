const headingEl = document.querySelector("h1");
const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const paraEl = document.querySelector("p");

const greetingFunction = () => {
  const name = inputEl.value;
  const greeting = `Hello ${name}`;
  paraEl.textContent = greeting;
  inputEl.value = "";
};

buttonEl.addEventListener("click", greetingFunction);
