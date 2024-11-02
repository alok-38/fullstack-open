const paraEl = document.querySelector("p");
const buttonEl = document.querySelector("button");

const purchaseConfirmation = () => {
  paraEl.textContent = "Thank you for your purchase!";
};

buttonEl.addEventListener("click", purchaseConfirmation);
