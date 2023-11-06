const otpInputs = document.querySelectorAll('.code');

// Add event listeners for OTP input fields
otpInputs.forEach((input, index) => {
    input.addEventListener('input', (event) => {
        const currentInput = event.target;
        const value = currentInput.value;

        if (value.length === 1 && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus(); // Focus on the next input field
        } else if (value.length === 0 && index > 0) {
            otpInputs[index - 1].focus(); // Focus on the previous input field on backspace
        }
    });

    // Prevent non-numeric input
    input.addEventListener('keydown', (event) => {
        if (!/[0-9]/.test(event.key) && event.key !== 'Backspace') {
            event.preventDefault();
        }
    });
});