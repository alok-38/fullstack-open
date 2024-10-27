const buttonA = document.getElementById("button_A");
const headingA = document.getElementById("heading_A");

let count = 1;

buttonA.onclick = () => {
  buttonA.textContent = "Try again!";
  headingA.textContent = `${count} clicks so far`;
  count++;
};
