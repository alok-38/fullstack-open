/*
    TODO: 2. Select the elements with the following IDs
    * Modal
    * Open Modal button
    * Close Modal button
    * Bonus: overlay
*/

// TODO: 3. Create a click event listener for the open-modal-btn that adds
// the class "open" ot the modal
// Bonus: Also add the class "open" to the overlay

// TODO: 4. Create a click event listener for the close-modal-btn
// that removes the class "open" from the modal
// BONUS: Also remove the class "open" from the overlay

// BONUS: Add a click event listener to the overlay that removes
// class "open" from the  modal and the overlay

// Select the elements with the given IDs
const openBtnEl = document.getElementById('open-modal-btn');
const closeBtnEl = document.getElementById('close-modal-btn');
const modalEl = document.getElementById('modal');
const overlayEl = document.getElementById('overlay');

// Create a click event listener for the open-modal-btn that adds the class "open" to the modal
// Bonus: Also add the class "open" to the overlay
openBtnEl.addEventListener('click', () => {
    modalEl.classList.add('open');
    overlayEl.classList.add('open');
})

// Create a click event listener for the close-modal-btn that removes the class "open" from the modal
// Bonus: Also remove the class "open" from the overlay
closeBtnEl.addEventListener('click', () => {
    modalEl.classList.remove('open');
    overlayEl.classList.remove('open');
})

// Add a click event listener to the overlay that removes class "open" from the modal and the overlay
overlayEl.addEventListener('click', () => {
    modalEl.classList.remove('open');
    overlayEl.classList.remove('open'); // Ensure the overlay is also closed
})
