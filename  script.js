

//wrapping DOMContentLoaded event listener

document.addEventListener('DOMContentLoaded', function () {
    //Here’s how you can use document.getElementById to select the form with id="registration-form" and store the reference in a constant named form:

    const form = document.getElementById('registration-form');

    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function (event) {
        // Prevent the default form submission to the server
        event.preventDefault();

        // Add your validation logic here
        console.log('Form submission prevented for validation');

        // Retrieve user inputs and trim whitespace
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation variables

        let isValid = true;
        let messages = [];

        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }
        //Email validation
        if (email.includes('@') || email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');

        }
        // Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }
        // Display feedback
        feedbackDiv.style.Display = "block";

        if (isValid) {
            // If valid, show success message
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        }
        else {
            // If invalid, show error messages
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";
        }



    });


});
