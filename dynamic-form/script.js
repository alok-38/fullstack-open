function displayErrors(errors) {
    // Clear previous error messages
    const errorDivs = document.querySelectorAll('.error');
    errorDivs.forEach(div => div.textContent = '');

    // Loop through the errors using for...in
    for (let field in errors) {
        const errorElement = document.getElementById(`error-${field}`);
        if (errorElement) {
            errorElement.textContent = errors[field];
        }
    }
}

// Example: simulate form validation
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Simulated validation errors
    const errors = {
        name: "Name is required",
        email: "Email is invalid"
    };

    displayErrors(errors);
});
