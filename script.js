
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('contactForm');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const emailError = document.getElementById('emailError');
        const messageError = document.getElementById('messageError');
        const formStatus = document.getElementById('formStatus');

        form.addEventListener('submit', function (event) {
            // Stop the form from submitting normally
            event.preventDefault();
            
            // Clear previous errors
            emailError.textContent = '';
            messageError.textContent = '';
            formStatus.textContent = '';
            
            let isValid = true;
            
            const emailValue = emailInput.value.trim();
            const messageValue = messageInput.value.trim();

            // 1. Email Validation (Simple regex for pattern)
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailValue === "") {
                emailError.textContent = "Email is required.";
                isValid = false;
            } else if (!emailPattern.test(emailValue)) {
                emailError.textContent = "Please enter a valid email address.";
                isValid = false;
            }

            // 2. Message Validation (Check length)
            if (messageValue === "") {
                messageError.textContent = "A message is required.";
                isValid = false;
            } else if (messageValue.length < 10) {
                messageError.textContent = "Message must be at least 10 characters long.";
                isValid = false;
            }

            // 3. Submission Logic
            if (isValid) {
                // In a real application, you would use 'fetch' or 'XMLHttpRequest'
                // to send this data to a server-side script (e.g., PHP, Node.js).
                
                // Simulate a successful submission
                formStatus.textContent = "Thank you! Your message has been sent.";
                formStatus.style.color = "#28a745"; // Green color
                
                // Clear the form fields after success
                form.reset();
            } else {
                formStatus.textContent = "Please correct the errors above.";
                formStatus.style.color = "#dc3545"; // Red color
            }
        });
    });